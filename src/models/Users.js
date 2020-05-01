const {Schema, model} =requiere('mongoose')

const user = new Schema({
    usuario: {
        type: string, 
        requiere: true
    },
    nombre: {
        type: string, 
        requiere: true
    },
    password: {
        type: string, 
        requiere: true
    },
    email: {
        type: string, 
        requiere: true
    },

}, { 
    timestamps: true
})

module.exports = model('Users', user)

user.methods.matchPassword = function(password) {
    if(password = this.password) {
        return true
    }
     return false
 }