//clienteModel.js
var mongoose = require('mongoose');

// Setup schema
var clienteSchema = mongoose.Schema({
    descripcionEmpresa: {
        type: String,
        required: true
    }
});

// Export Cliente model
var Cliente = module.exports = mongoose.model('cliente',
clienteSchema);module.exports.get = function (callback, limit) {
    Cliente.find(callback).limit(limit);
}
