const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/Users')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'

}, async(email, password, done)=>{
    const user = await User.findOne({email:email})
    if(!user){
        req.flash('msg_login', 'Usuario no encontrado')
        return done(null, false)
    }else {
        
        const match = await user.matchPassword(password)
        
        if(match){
            return done(null, user)
        } else {
            req.flash('msg_login', 'Contraseña incorrecta')
            return done(null, false)
        }
    }
}))

passport.serializeUser((user, done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=>{
    User.findById(id, (err, user)=>{
        done(err,user)
    })
})