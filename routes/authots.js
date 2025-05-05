//Creación de las rutas con express y router

const express = require('express')

//instanciamos el objeto router

const router = express.Router();

//importamos el controller
const authorController = require('../controllers/authorController')


//endpoins

//Endpoint getAll
router.get('/', authorController.getAll)

//Endpoint getById
router.get('/:id', authorController.getById)

//Endpoint post

router.post('/:id', authorController.create)

//Endpoint put
router.put('/:id', authorController.edit);

//Endpoint delete
router.put('/:id', authorController.deleted)

//endpoint put para agregar un libro a una lista de autores
router.put('/:id', authorController.addBookToAuthor)



module.exports = router;