// api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var contactController = require('./controladores/contactController');
var proyectoController = require('./controladores/proyectoController');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);


// Añadir proyecto routes (???
// Proyecto routes

router.route('/proyectos')
    .get(proyectoController.index)
    .post(proyectoController.new);

router.route('/proyectos/:proyecto_id')
    .get(proyectoController.view)
    .patch(proyectoController.update)
    .put(proyectoController.update)
    .delete(proyectoController.delete);

// Export API routes
module.exports = router;