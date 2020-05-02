require('dotenv').config()
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

const methodOverride = require('method-override')

//Inicializaciones
const app = express()
require('./database')

//Configuraciones
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main', 
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')


//Middlewares 
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(methodOverride('_method'))

//Rutas
app.use(require('./rutas/index.routes'))
app.use(require('./rutas/diplomas.routes'))

//Ficheros estáticos
app.use(express.static(path.join(__dirname, 'public')))


//Inicio
app.listen(process.env.PORT, ()=>{
    console.log("Servidor en puerto:", process.env.PORT )
})