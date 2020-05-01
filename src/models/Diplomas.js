const {Schema, model} =requiere('mongoose')

const diploma = new Schema({
    usuario: {
        type: string, 
        requiere: true
    },
    tipoDiploma: {
        type: string, 
        requiere: true
    },
    urlDiploma: {
        type: string, 
        requiere: true
    },
    descargadoDiploma: {
        type: boolean, 
        requiere: true
    },

}, { 
    timestamps: true
})

module.exports = model('Diplomas', diploma)