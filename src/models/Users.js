const {Schema, model} =require('mongoose')

const user = new Schema({
    usuario: {
        type: String, 
        required: true
    },
    nombre: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    admin:{
        type: String,
        required: true
    }

}, { 
    timestamps: true
})

user.methods.matchPassword = function(password) {
    console.log(password)
    if(password == this.password) {
        return true
    }
     return false
 }

 module.exports = model('Users', user)