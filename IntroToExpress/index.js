//punto de entrada de la App
/* console.log('hola mundo') */
//en el controlador se crea para poner los metodos que puedan hacer para subir/borrar/update peliculas

//IMPORTANDO LAS DIFERENTES BIBLIOTECAS A USAR l9-11

//const express = objeto de la libreria de express
//requiere = palabra reservada
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {router} =  require('./routes'); //trayendo las rutas

//guardando ref a las librerias a usar
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');




//CREANDO LA APP DE EXPRESS l13-14
const app = express();
//si no encuentra el peurto 3k, lo corre en 3003
const apiPort = process.env.API_PORT || 3003; //porque react se levanta en el puerto 3k

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

app.use('/api', router); //cada vez que llega una / ejecuta alguna de las rutas de router

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile)) //

//para decirle que no se muera una vez que termine de ejecutar todo, sino que se quede "dormida" hasta que le lleguen un requests
//solo hasta que nosotros le indiquemos
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));