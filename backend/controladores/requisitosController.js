// Import contact model
Requisitos = require('../modelos/requisitosModel');

// Handle index actions
exports.index = function (req, res) {
    Requisitos.get(function (err, requisitos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: requisitos
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var requisitos = new Requisitos();
    requisitos.nombre_titular = req.body.nombre_titular ? req.body.nombre_titular : requisitos.nombre_titular;

    // save the contact and check for errors
    requisitos.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New requisito created!',
            data: requisitos
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Requisitos.findById(req.params.requisitos_id, function (err, requisitos) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: requisitos
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {Requisitos.findById(req.params.requisitos_id,
    function (err, requisitos) {
        if (err)
            res.send(err);
        requisitos.nombre_titular = req.body.nombre_titular ? req.body.nombre_titular : requisitos.nombre_titular;
        
        // save the contact and check for errors
        requisitos.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'requisitos Info updated',
                data: requisitos
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Requisitos.remove({
        _id: req.params.requisitos_id
    }, function (err, requisitos) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'requisitos deleted'
        });
    });
};