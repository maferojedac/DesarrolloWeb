//logica de los diferentes endpoints

//controlador-funcion
//recibe un request y un response

//el index solo debe controlar la app, no ejecutar todo el codigo

const FS = require('../firebase');
const {db} = FS;

//CREATE MOVIE
//se hace llamada async porque nos conectaremos a internet
const createMovie = async(req,res) => {

    /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Structure of movie to be created. This doesn\'t need to have an id yet as the db will be generating it for us',
                schema: {
                    $name: 'Avatar',
                    $author: 'James Cameron',
                    time: ['20:00', '22:00'],
                    rating: 5.00
                }
        }
        #swagger.responses[200] = {
                description: 'Movie successfully obtained.',
                schema: { $ref: '#/definitions/Movie' }
        }
        #swagger.responses[500] = {
                description: 'Error.',
                schema: { $ref: '#/definitions/GenericError' }
        }
        #swagger.produces = ['application/json']
        #swagger.consumes = ['application/json']
        */


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
};

const getMovie = async (req, res) => {
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
};

const deleteMovie = async (req, res) => {
    try {
        const {params : {id}} = req;
        const response = await db.collection('movies').doc(id).delete(); //trae un documento, da la instruccion de eliminarse
        res.send({
            status: 200
        });
    } catch (error) {

    }
};

const updateMovie = async(req,res) => {
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
};

const showMovies = async (req, res) => {
    try{ 
        const moviesDB = await db.collection('movies').get(); //traimos toda la coleccion de movies
        const resp = moviesDB.docs.map(doc => doc.data()); //de la coleccion entra a docs, y mapea 
        res.send({
            resp
        });
    } catch (error) {
        res.send(error);
    }
};


module.exports = {
    createMovie, deleteMovie, getMovie, updateMovie, showMovies
}
