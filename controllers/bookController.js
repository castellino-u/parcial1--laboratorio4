//Creación de los servicios que exportaremos a routes

//importamos el modelo
const Book = require('../models/Book')

//Métodos 


//Método post - crear
exports.create = async(req, res)=> {
    const newBook = Book(req.body)

    try {
        await newBook.save()
        res.status(200).json()
    } catch (error) {
        
    }
}
//Método getAll

exports.getAll = async(req, res)=>{
    try {
        const books = await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(404).json({error: "Libros no encontrados"})
    }
}

//Método getById
exports.getById = async(req, res) =>{
    const id = req.params.id
    try {
        const book = await Book.findById(id)
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({error: "Error al encontrar "})
    }
}


//Método put - edit 

exports.edit = async (req, res) =>{
    const id = req.params.id
    const newBook = req.body

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, newBook, {new : true})
        res.status(200).json(updatedBook)
    } catch (error) {
        res.status(404).json({error: "Error al editar libro"})
    }
}



//Método delete

exports.deleted = async (req, res) => {
    const id = req.params.id

    try {
        // Verificar si algún autor tiene este libro
        const authorWithBook = await Author.findOne({ books: id })
        if (authorWithBook) {
            return res.status(400).json({ error: "No se puede eliminar el libro porque está asignado a un autor" })
        }

        const deletedBook = await Book.findByIdAndDelete(id)
        res.status(200).json(deletedBook)
    } catch (error) {
        res.status(500).json({ error: "Error al borrar el libro" })
    }
}