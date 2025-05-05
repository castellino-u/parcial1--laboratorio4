//Creación de las rutas con express y router

const express = require('express')

//instanciamos el objeto router

const router = express.Router();

//importamos el controller
const bookController = require('../controllers/bookController')

//endpoins

//Endpoint getAll
router.get('/', bookController.getAll)

//Endpoint getById
router.get('/:id', bookController.getById)

//Endpoint post

router.post('/:id', bookController.create)

//Endpoint put
router.put('/:id', bookController.edit);

//Endpoint delete
router.put('/:id', bookController.deleted)

//Exportamos el router
module.exports = router;