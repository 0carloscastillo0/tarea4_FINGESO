// Import contact model
Proyecto = require('../modelos/proyectosModel');

// Handle index actions
exports.index = function (req, res) {
    Proyecto.get(function (err, proyectos) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: proyectos
        });
    });
};

// Handle create contact actions
exports.new = function (req, res) {
    var proyecto = new Proyecto();
    proyecto.nombre_titular = req.body.nombre_titular ? req.body.nombre_titular : proyecto.nombre_titular;
    proyecto.nombre_proyecto = req.body.nombre_proyecto
    proyecto.requisitos = req.body.requisitos;

    // save the contact and check for errors
    proyecto.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New proyect created!',
            data: proyecto
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Proyecto.findById(req.params.proyecto_id, function (err, proyecto) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: proyecto
        });
    });
};

// Handle update contact info
exports.update = function (req, res) {Proyecto.findById(req.params.proyecto_id,
    function (err, proyecto) {
        if (err)
            res.send(err);
        proyecto.nombre_titular = req.body.nombre_titular ? req.body.nombre_titular : proyecto.nombre_titular;
        proyecto.nombre_proyecto = req.body.nombre_proyecto
        proyecto.requisitos = req.body.requisitos;
        
        // save the contact and check for errors
        proyecto.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'proyecto Info updated',
                data: proyecto
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Proyecto.remove({
        _id: req.params.proyecto_id
    }, function (err, proyecto) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Proyecto deleted'
        });
    });
};