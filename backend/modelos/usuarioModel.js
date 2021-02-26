//contactModel.js
var mongoose = require('mongoose');
s
// Setup schema
var usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rol: String
});

// Export usuario model
var Usuario = module.exports = mongoose.model('usuario',
usuarioSchema);module.exports.get = function (callback, limit) {
    Usuario.find(callback).limit(limit);
}