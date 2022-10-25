## orignal index structure

//punto de entrada de la App
/* console.log('hola mundo') */
//en el controlador se crea para poner los metodos que puedan hacer para subir/borrar/update peliculas

//IMPORTANDO LAS DIFERENTES BIBLIOTECAS A USAR l9-11

//const express-objeto de la libreria de express
//require-palabra reservada
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//inicializando 
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

//todo lo que nos llegue en body, lo castee como si fuera un json (aunque no lo sea)
app.use(bodyParser.json())

//creando nuestro primer input
//si alguien ingresa un /, le devuelve/responde "hello world"
app.get('/', (req, res) => {
    res.send('Hello world!');
});

//CRUD - create read update delete

//CREATE MOVIE
//se hace llamada async porque nos conectaremos a internet
app.post('/create-movie', async(req,res) => {
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
});

//READ MOVIE          -           PATH - VERBO - RESPUESTA
//get movie: un parametro (el id que traen las peliculas)
app.get('/get-movie/:id', async (req, res) => {
    //es como el Try-Except de Python
    try{ //hace todo lo que este dentro de try, lo hara, si sale un error, no para el programa solo manda un error
        /* console.log("req:",req); */
        const {params : {id}} = req;
        const moviesDB = db.collection('movies').doc(id); //solo trae un documento en particular
        const {_fieldsProto: {time, author, name, rating} } = await moviesDB.get();
        /* console.log("response:",response); */
        res.send({
            status: 200,
            time: time.stringValue,
            author: author.stringValue,
            name: name.stringValue,
            rating: rating.stringValue

        });
    } catch (error) {
        res.send(error);
    } //finally {}     se usa para cerrar archivos, siempre pasa aunque haya errores
});

//DELETE
app.delete('/delete-movie/:id', async (req, res) => {
    try {
        const {params : {id}} = req;
        const response = await db.collection('movies').doc(id).delete(); //trae un documento, da la instruccion de eliminarse
        res.send({
            status: 200
        });
    } catch (error) {

    }
});


//UPDATE
app.put('/update-movie', async(req,res) => {
    try {
        const {body : movie} = req;
        const { id, time, author, name, rating } = movie;
        const moviesDB = db.collection('movies').doc(id);
       const resp = await moviesDB.update({
        name, time, rating, author
       });
       res.send({
        status: 200, //significa que todo bien
        id
       });
    } catch (error) {
        res.send(error)
    }
})


//RETO - Endpoints GET MOVIES-devuelva arreglo de las peliculas disponibles
app.get('/show-movies', async (req, res) => {
    try{ 
        const moviesDB = await db.collection('movies').get(); //traimos toda la coleccion de movies
        const resp = moviesDB.docs.map(doc => doc.data()); //de la coleccion entra a docs, y mapea 
        res.send({
            resp
        });
    } catch (error) {
        res.send(error);
    }
});



//para decirle que no se muera una vez que termine de ejecutar todo, sino que se quede "dormida" hasta que le lleguen un requests
//solo hasta que nosotros le indiquemos
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));