//proyectosModel.js
var mongoose = require('mongoose');

// Setup schema
var proyectosSchema = mongoose.Schema({
    nombre_titular: {
        type: String,
        required: true
    },
    nombre_proyecto: {
        type: String,
        required: true
    },    
    requisitos: {
        type: String,
        required: true
    },
});

// Export Proyectos model
var Proyectos = module.exports = mongoose.model('proyectos',
proyectosSchema);module.exports.get = function (callback, limit) {
    Proyectos.find(callback).limit(limit);
}