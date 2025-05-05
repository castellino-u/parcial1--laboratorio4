//librerias

const express = require('express')
const mongoose = require('mongoose')


//Url que vamos a usar para conectarnos a l base de datos
//		mongodb+srv://Root:Root@user.vauaijh.mongodb.net/

//instanciamos la app
const app = express();

//instanciamos el puerto
const PORT = process.env.PORT || 3000;

//routes
//importamos los controllers
const authorsRoutes = require('./routes/authots')
const bookRouters = require('./routes/books')

//integramos las rutas a la app

app.use('/books', bookRouters)

app.use('/authors', authorsRoutes)


//Midelwares
app.use(express.json());


//conexión mongoose 
mongoose.connect("mongodb+srv://Root:Root@user.vauaijh.mongodb.net/", {
    dbName:"Libros"
}).then(()=>
    console.log("conexción exitosa")
).catch(()=>console.log("error al conectar"))

//instanciamos para que escuche el puerto
app.listen(PORT, ()=> {
    console.log("servidor corriendo en el puerto 3000")
})
