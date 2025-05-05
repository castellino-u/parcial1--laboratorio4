//Creación de los servicios que exportaremos a routes

//importamos el modelo
const Author = require('../models/Author')

//Métodos 


//Método post - crear
exports.create = async(req, res)=> {
    const newAuthor = Book(req.body)

    
    // Validación: el autor debe tener nombre
    if (!newAuthor.name || newAuthor.name.trim() === '') {
        return res.status(400).json({ error: "El autor debe tener un nombre" })
    }

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

exports.addBookToAuthor = async (req, res) => {
    // Admite ruta por parámetros o por query string
    const authorId = req.params.id || req.query.id
    const bookId = req.params.bookId || req.query.bookId

    try {
        // Validar existencia del libro
        const book = await Book.findById(bookId)
        if (!book) {
            return res.status(404).json({ error: "El libro no existe" })
        }

        // Validar que el libro tenga un autor asignado
        if (!book.author) {
            return res.status(400).json({ error: "El libro no tiene autor asignado" })
        }

        // Validar existencia del autor
        const author = await Author.findById(authorId)
        if (!author) {
            return res.status(404).json({ error: "El autor no existe" })
        }

        // Validar que el autor tenga nombre
        if (!author.name || author.name.trim() === '') {
            return res.status(400).json({ error: "El autor no tiene un nombre válido" })
        }

        // Validar si el libro ya está asignado al autor
        if (author.books.includes(bookId)) {
            return res.status(400).json({ error: "El libro ya está asignado a este autor" })
        }

        // Asignar libro al autor
        author.books.push(bookId)
        await author.save()

        res.status(200).json({ message: "Libro agregado al autor correctamente", author })
    } catch (error) {
        res.status(500).json({ error: "Error al agregar libro al autor" })
    }
}