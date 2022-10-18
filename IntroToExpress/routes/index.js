const express = require('express');

//objeto que trae lo que controllers exporta
const {createMovie, deleteMovie, getMovie, updateMovie, showMovies} = require('../controllers');

const router = express.Router();

//                ruta       funcion que lo mapea-verbo con funcion asociada
router.post('/create-movie', createMovie);
router.get('/get-movie/:id', getMovie);
router.delete('/delete-movie/:id', deleteMovie);
router.put('/update-movie', updateMovie);
router.get('/show-movie', showMovies);

module.exports = {
    router
}