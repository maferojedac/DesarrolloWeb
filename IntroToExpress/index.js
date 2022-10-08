//punto de entrada de la App
/* console.log('hola mundo') */
//en el controlador se crea para poner los metodos que puedan hacer para subir/borrar/update peliculas

//IMPORTANDO LAS DIFERENTES BIBLIOTECAS A USAR l9-11

//const express = objeto de la libreria de express
//requiere = palabra reservada
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//iniciializando 
/* cambiamos "admin" a "firebase" */
var firebase = require("firebase-admin");

var serviceAccount = require("./key.json");

/* exportando la bd de firebase */
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

//creando bd
const db = firebase.firestore();


//CREANDO LA APP DE EXPRESS l13-14
const app = express();
const apiPort = 3003; //porque react se levanta en el puerto 3k

//CONFIGURANDO NUESTRA APP l18-38

//espera que le devuelvas un json (para apis), tambien puede recibir videos, img
//le dice que solo
app.use(bodyParser.urlencoded({ extended: true }))

//cors-permite que no nos explote la app, cuando se estan corriendo 2 apps a la vez con diferentes puertos
//el navegador piensa que es inseguro porque puede que nos esten atacando desde adentro de tu maquina
//le dice al navegador que "todo esta bien", si el cliente y el servidor estan en la misma maquina
app.use(cors());

//todo lo que nos llegue en body, lo castee como si fuera un json (auqneu no lo sea)
app.use(bodyParser.json())

//creando nuestro primer input
//si alguien ingresa un /, le devuelve/responde "hello world"
app.get('/', (req, res) => {
    res.send('Hello world!');
});

//CRUD - create read updae delete

//se hace llamada async porque nos conectaremos a internet
app.post('/create', async(req,res) => {
    try {
        const {body : movie} = req; /* de todo el req solo queremos sacar el body, se renombra a movie */
        const moviesDB = db.collection('movies'); //creando coleccion (tabla)
       const {_path:{segments}} = await moviesDB.add(movie); /* para guardar datos, dejamos que la bd cree un id-add */
       const id = segments[1];
       res.send({
        status: 200, //significa que todo bien
        id
       });
    } catch (error) {
        res.send(error)
    }
})

//para decirle que no se muera una vez que termine de ejecutar todo, sino que se quede "dormida" hasta que le lleguen un requests
//solo hasta que nosotros le indiquemos
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));