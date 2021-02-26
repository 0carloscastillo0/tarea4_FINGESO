//listaPostulantesModel.js
var mongoose = require('mongoose');

// Setup schema
var listaPostulantesSchema = mongoose.Schema({
    nomProyecto: {
        type: String,
        required: true
    },
});

// Export listaPostulantes model
var ListaPostulantes = module.exports = mongoose.model('listaPostulantes',
listaPostulantesSchema);module.exports.get = function (callback, limit) {
    ListaPostulantes.find(callback).limit(limit);
}