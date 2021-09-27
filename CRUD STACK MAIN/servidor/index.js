const express = require ('express');
const conectarDB = require('./config/db');
const cors = require ("cors")

// creamos servidor 
const app = express();

// conectamos a la base de datos 
conectarDB();

app.use(cors())

app.use(express.json());

app.use('/api/productos',require ('./routes/producto')); 

// definimos ruta principal
/*
app.get('/' , (req,res)=> {
    res.send("Hola Mundo")
})
*/

app.listen(4000, ()=>{
    console.log("el servidor esta corriendo perfectamente.")
})