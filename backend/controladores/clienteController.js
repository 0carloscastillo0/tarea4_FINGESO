// Import contact model
Cliente = require('../modelos/clienteModel');

// Handle index actions
exports.index = function (req, res) {
    Cliente.get(function (err, clientes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: clientes
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var cliente = new Cliente();
    cliente.descripcionEmpresa = req.body.descripcionEmpresa;

    // save the contact and check for errors
    cliente.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New client created!',
            data: cliente
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Cliente.findById(req.params.cliente_id, function (err, cliente) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: cliente
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {Cliente.findById(req.params.cliente_id,
    function (err, cliente) {
        if (err)
            res.send(err);
        cliente.descripcionEmpresa = req.body.descripcionEmpresa;
        
        // save the contact and check for errors
        cliente.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'cliente Info updated',
                data: cliente
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Cliente.remove({
        _id: req.params.cliente_id
    }, function (err, cliente) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'cliente deleted'
        });
    });
};