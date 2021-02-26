//requisitosModel.js
var mongoose = require('mongoose');

// Setup schema
var requisitosSchema = mongoose.Schema({
    lista: {
        type: String,
        required: true
    }
});

// Export Requisitos model
var Requisitos = module.exports = mongoose.model('requisitos',
requisitosSchema);module.exports.get = function (callback, limit) {
    Requisitos.find(callback).limit(limit);
}