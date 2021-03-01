// Import contact model
Formulario = require('../modelos/formularioPostulacionModel');

// Handle index actions
exports.index = function (req, res) {
    Formaulario.get(function (err, formularios) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "formularios retrieved successfully",
            data: formularios
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var formulario = new Formulario();
    formulario.nombreEmpresa = req.body.nombreEmpresa ? req.body.nombreEmpresa : formulario.nombreEmpresa;
    formulario.descripcionEmpresa = req.body.descripcionEmpresa;
    formulario.razonesDePostulacion = req.body.razonesDePostulacion;
    // save the contact and check for errors
    formulario.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New formulario created!',
            data: formulario
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Formulario.findById(req.params.formulario_id, function (err, formulario) {
        if (err)
            res.send(err);
        res.json({
            message: 'formulario details loading..',
            data: formulario
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {Formulario.findById(req.params.formulario_id,
    function (err, formulario) {
        if (err)
            res.send(err);
        formulario.nombreEmpresa = req.body.nombreEmpresa ? req.body.nombreEmpresa : formulario.nombreEmpresa;
        formulario.descripcionEmpresa = req.body.descripcionEmpresa;
        formulario.razonesDePostulacion = req.body.razonesDePostulacion;
        // save the contact and check for errors
        formulario.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'formulario Info updated',
                data: formulario
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Formulario.remove({
        _id: req.params.formulario_id
    }, function (err, formulario) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'formulario deleted'
        });
    });
};