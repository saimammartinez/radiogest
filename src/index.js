require('dotenv').config()
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')
const passport = require('passport')


//Inicializaciones
const app = express()
require('./database')
require('./config/passport')

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
app.use(session({
    secret:'balilla',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


//Varioables Globales
app.use((req, res, next)=>{
    res.locals.msg_err = req.flash('msg_err')
    res.locals.msg_ok = req.flash('msg_ok')
    res.locals.msg_login = req.flash('msg_login')
    res.locals.user = req.user || null
    next()
})


//Rutas
app.use(require('./rutas/index.routes'))
app.use(require('./rutas/diplomas.routes'))
app.use(require('./rutas/users.routes'))

//Ficheros estáticos
app.use(express.static(path.join(__dirname, 'public')))


//Inicio
app.listen(process.env.PORT, ()=>{
    console.log("Servidor en puerto:", process.env.PORT )
})