const {Schema, model} = require('mongoose')

const Diploma = new Schema({
    usuario: {
        type: String, 
        required: true
    },
    tipoDiploma: {
        type: String, 
        required: true
    },
    urlDiploma: {
        type: String
        
    },
    descargadoDiploma: {
        type: String,
        required: false
    },

}, { 
    timestamps: true
}) 

module.exports = model('Diploma', Diploma)