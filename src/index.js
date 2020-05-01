require('dotenv').config()
const express = require('express')
const path = require('path')
const morgan = require('morgan')


//Inicializaciones
const app = express()
require('./database')

//Configuraciones
app.set('views', path.join(__dirname, 'views'))


//Middlewares
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))


//Rutas
app.get('/', (req, res)=>{
    res.send('Hola Miky')
})

//Ficheros estáticos
app.use(express.static(path.join(__dirname, 'public')))


//Inicio
app.listen(process.env.PORT, ()=>{
    console.log("Servidor en puerto:", process.env.PORT )
})