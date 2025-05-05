
//Construcción de los schemas
//importamos mongoose 

const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    resumen:{
        type: String,
        required: false
    },
    genero:{
        type: String,
        require: true
    },
    publicacion:{
        type:String,
        required: true
    },
    disponible:{
        type: Boolean,
        required: true
    }
})


module.exports = mongoose.model("libros", bookSchema)