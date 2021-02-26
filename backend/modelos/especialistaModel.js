//EspecialistaModel.js
var mongoose = require('mongoose');

// Setup schema
var contactSchema = mongoose.Schema({
    descripcionEmpresa: {
        type: String,
        required: true
    }
});

// Export Contact model
var Especialista = module.exports = mongoose.model('especialista',
especialistaSchema);module.exports.get = function (callback, limit) {
    Especialista.find(callback).limit(limit);
}