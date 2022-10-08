//el modelo de la entidad de nuestra BD

//moogose = API para interactuar con mongo
const mongoose = require('mongoose');

//creando esquema de mogoose
const Schema = mongoose.Schema;

//creando el modelo Movie, deifinicion de una movie
const Movie = new Schema(
    {
    name: { type: String, required: true},
    time: { time: [String], required: true}, //[] = arreglo de strings
    raiting: { rating: Number, required: true},
    },
    {timestamps: true} //objeto ya prexistente, nos dice la hora en la que se edito/agrego un objeto a la BD
);

//todo se exporta por modulos cuando se hace solo con NODE
//                    nombre de esquema | esquema
module.exports = mongoose.model('movies',Movie);