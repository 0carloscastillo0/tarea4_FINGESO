// Import contact model
Especialista = require('../modelos/especialistaModel');

// Handle index actions
exports.index = function (req, res) {
    Especialista.get(function (err, especialistas) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "especialistas retrieved successfully",
            data: especialistas
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var especialista = new Especialista();
    especialista.descripcionEmpresa = req.body.descripcionEmpresa ? req.body.descripcionEmpresa : especialista.descripcionEmpresa;
    // save the contact and check for errors
    especialista.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New especialista created!',
            data: especialista
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Especialista.findById(req.params.especialista_id, function (err, especialista) {
        if (err)
            res.send(err);
        res.json({
            message: 'Especialista details loading..',
            data: especialista
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {Especialista.findById(req.params.especialista_id,
    function (err, especialista) {
        if (err)
            res.send(err);
        especialista.descripcionEmpresa = req.body.descripcionEmpresa ? req.body.descripcionEmpresa : contact.descripcionEmpresa;
        // save the contact and check for errors
        especialista.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'especialista Info updated',
                data: especialista
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Especialista.remove({
        _id: req.params.especialista_id
    }, function (err, especialista) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Especialista deleted'
        });
    });
};