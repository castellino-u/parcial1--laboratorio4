//Construcción de los schemas
//importamos mongoose 

const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    fechaNacimiento:{
        type: String,
        required: true
    },
    nacionalidad:{
        type: String,
        required: true
    },
    libros:[{
        type: mongoose.Schema.ObjectId,
        ref: "Book"
    }]

})

module.exports = mongoose.model("autors", authorSchema)