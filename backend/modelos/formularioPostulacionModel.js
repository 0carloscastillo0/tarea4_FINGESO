//formularioPostulacionModel.js
var mongoose = require('mongoose');

// Setup schema
var formularioPostulacionSchema = mongoose.Schema({
    nombreEmpresa: {
        type: String,
        required: true
    },
    descripcionEmpresa: {
        type: String,
        required: true
    },
    razonesDePostulacion: {
        type: String,
        required: true
    }
});

// Export formularioPostulacion model
var FormularioPostulacion = module.exports = mongoose.model('formularioPostulacion',
formularioPostulacionSchema);module.exports.get = function (callback, limit) {
    FormularioPostulacion.find(callback).limit(limit);
}