const usersCtrl = {};
const passport = require('passport')
const User = require('../models/Users')

//post - users/new-user
usersCtrl.createUser = async(req, res) => {
    
    const {
        usuario,
        nombre,
        password,
        email,
        admin
    } = req.body
    if(admin==undefined){
        valAdmin = 'off'
    }else{
        valAdmin = 'on'
    }
    newUser = new User({
        usuario,
        nombre,
        password,
        email,
        admin: valAdmin
    })
    validemail = await User.findOne({email})
    if(!validemail){
        await newUser.save();
        req.flash('msg_ok', 'Usuario añadido correctamente')
        
        res.redirect('/users')
    } else
    {
        req.flash('msg_err', 'Este e-mail ya existe: ' + email)
        res.redirect('/users/add')   
    }

}

//get - users/add
usersCtrl.renderUsersForm = (req, res) => {
    res.render('users/newUser')
}

//get - users
usersCtrl.renderAllUsers = async (req, res) => {
    const users = await User.find().lean()
    res.render('users/allusers', {users})
}

//post override put - user/edit/:id
usersCtrl.updateUser = async(req, res) => {
    
    const {usuario, nombre, password, email, admin} = req.body;
    if(!admin || admin == undefined){
        valAdmin ='off'
    }else{
        valAdmin = 'on'
    }

    await User.findByIdAndUpdate(req.params.id, { 
        usuario,
        nombre,
        password,
        email,
        admin: valAdmin
    })
    req.flash('msg_ok', 'User actualizado correctamente')
    res.redirect('/users')
}

//post override delete - user/delete/:id
usersCtrl.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    req.flash('msg_ok', 'User eliminado correctamente')
    res.redirect('/users')
}
// get - user/editUser.habs
usersCtrl.renderUpdateForm = async (req, res)=>{

    const userEdit = await User.findById(req.params.id).lean()
    if(userEdit.admin==="on"){
        checked = 'checked'
    }else {
        checked=''
    }
    res.render('users/editUser.hbs', {userEdit, checked})
}

//
usersCtrl.renderLoginForm = (req,res)=>{
    res.render('users/login')
}

usersCtrl.login = passport.authenticate('local', {
    failureRedirect: '/users/login',
    successRedirect: '/diplomas',
    failureFlash: true

})

usersCtrl.logout = (req, res)=>{
    req.logout()
    req.flash('msg_ok', 'Has cerrado sesión correctamente')
    res.redirect('/users/login')
}

module.exports = usersCtrl;