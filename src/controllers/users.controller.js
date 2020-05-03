const usersCtrl = {};

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
    
    await newUser.save();
    req.flash('msg_ok', 'Usuario añadido correctamente')
    
    res.redirect('/users')
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
//{id:req.params.id, usuario:userEdit.usuario, tipo:userEdit.tipoUser, url:userEdit.urlUser, descargado:checked}
module.exports = usersCtrl;