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
var clienteController = require('/controladores/clienteController')
var contactController = require('./controladores/contactController');
var especialistaController = require('./controladores/especialistaController');
var proyectoController = require('./controladores/formularioPostulacionController');
var proyectoController = require('./controladores/proyectoController');
var requisitosController = require('/controladores/requisitosController')
var proyectoController = require('./controladores/usuarioController');


// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

//------------------------------------------------------------------------------
//cliente routes  
router.route('/clientes')
    .get(clienteController.index)
    .post(clienteController.new);
    
router.route('/clientes/:cliente_id')
    .get(clienteController.view)
    .patch(clienteController.update)
    .put(clienteController.update)
    .delete(clienteController.delete);
    

//------------------------------------------------------------------------------
// Proyecto routes
router.route('/proyectos')
    .get(proyectoController.index)
    .post(proyectoController.new);

router.route('/proyectos/:proyecto_id')
    .get(proyectoController.view)
    .patch(proyectoController.update)
    .put(proyectoController.update)

//------------------------------------------------------------------------------
//especialista routes
router.route('/especialistas')
    .get(especialistaController.index)
    .post(especialistaController.new);

router.route('/especialistas/:especialista_id')
    .get(especialistaController.view)
    .patch(especialistaController.update)
    .put(especialistaController.update)
    .delete(especialistaController.delete);

//------------------------------------------------------------------------------
//formulariosPostulacion routes
router.route('/formulariosPostulaciones')
    .get(proyectoController.index)
    .post(proyectoController.new);

router.route('/formulariosPostulaciones/:formularioPostulacion_id')
    .get(formularioPostulacionController.view)
    .patch(formularioPostulacionController.update)
    .put(formularioPostulacionController.update)
    .delete(formularioPostulacionController.delete);

//------------------------------------------------------------------------------
//requisitos routes
router.route('/requisitos')
    .get(requisitosController.index)
    .post(requisitosController.new);

router.route('/requisitos/:requisitos_id')
    .get(requisitosController.view)
    .patch(requisitosController.update)
    .put(requisitosController.update)
    .delete(requisitosController.delete);
    
//------------------------------------------------------------------------------
//usuario routes
router.route('/usuario')
    .get(usuarioController.index)
    .post(usuarioController.new);

router.route('/usuario/:usuario_id')
    .get(usuarioController.view)
    .patch(usuarioController.update)
    .put(usuarioController.update)
    .delete(usuarioController.delete);

// Export API routes
module.exports = router;