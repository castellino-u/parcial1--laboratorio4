//Creación de los servicios que exportaremos a routes

//importamos el modelo
const Author = require('../models/Author')

//Métodos 


//Método post - crear
exports.create = async(req, res)=> {
    const newAuthor = Book(req.body)

    try {
        await newAuthor.save()
        res.status(200).json()
    } catch (error) {
        
    }
}
//Método getAll

exports.getAll = async(req, res)=>{
    try {
        const authors = await Book.find()
        res.status(200).json(authors)
    } catch (error) {
        res.status(404).json({error: "Autores no encontrados"})
    }
}

//Método getById
exports.getById = async(req, res) =>{
    const id = req.params.id
    try {
        const author = await Author.findById(id)
        res.status(200).json(author)
    } catch (error) {
        res.status(404).json({error: "Error al encontrar "})
    }
}


//Método put - edit 

exports.edit = async (req, res) =>{
    const id = req.params.id
    const newAuthor = req.body

    try {
        const updatedAuthor = await Author.findByIdAndUpdate(id, newBook, {new : true})
        res.status(200).json(updatedAuthor)
    } catch (error) {
        res.status(404).json({error: "Error al editar"})
    }
}



//Método delete

exports.deleted= async (req, res) => {
    const id = req.params.id
    try {
        const deletedAuthor = await Author.findByIdAndDelete(id)
        res.status(200).json(deletedAuthor)
    } catch (error) {
        res.status(404).json({error: "error al borrar "})
    }
}


//Método para asignar un autor a un libro 

// Método getByTitle
exports.getByTitle = async (req, res) => {
    const title = req.query.title

    try {
        const books = await Book.find({ title: { $regex: title, $options: 'i' } }) // búsqueda insensible a mayúsculas
        res.status(200).json(books)
    } catch (error) {
        res.status(404).json({ error: "Error al buscar libros por título" })
    }
}
