// Import contact model
Usuario = require('../modelos/usuarioModel');

// Handle index actions
exports.index = function (req, res) {
    Usuario.get(function (err, usuarios) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Usuarios retrieved successfully",
            data: usuarios
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var usuario = new Usuario();
    usuario.nombre = req.body.nombre ? req.body.nombre : usuario.nombre;
    usuario.contraseña = req.body.contraseña;
    usuario.email = req.body.email;

    // save the contact and check for errors
    usuario.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New usuario created!',
            data: usuario
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Usuario.findById(req.params.usuario_id, function (err, usuario) {
        if (err)
            res.send(err);
        res.json({
            message: 'Usuario details loading..',
            data: usuario
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {Usuario.findById(req.params.usuario_id,
    function (err, usuario) {
        if (err)
            res.send(err);
        usuario.nombre = req.body.nombre ? req.body.nombre : usuario.nombre;
        usuario.contraseña = req.body.contraseña;
        usuario.email = req.body.email;
        
        // save the contact and check for errors
        usuario.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'usuario Info updated',
                data: usuario
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Usuario.remove({
        _id: req.params.usuario_id
    }, function (err, usuario) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'usuario deleted'
        });
    });
};