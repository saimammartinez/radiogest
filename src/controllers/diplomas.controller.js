const diplomasCtrl = {};

const Diploma = require('../models/Diploma')

//post - diplomas/new-diploma
diplomasCtrl.createDiploma = async(req, res) => {
    
    const {
        usuariodiploma,
        tipodiploma,
        urldiploma,
        descargadodiploma
    } = req.body

   

    if(descargadodiploma==undefined){
        valDescargado = 'off'
    }else{
        valDescargado = 'on'
    }
    
    newDiploma = new Diploma({
        usuario: usuariodiploma,
        tipoDiploma: tipodiploma,
        urlDiploma: urldiploma,
        descargadoDiploma: valDescargado
    })
    
    await newDiploma.save();
    
    res.send('Creado Diploma')
}

//get - diplomas/add
diplomasCtrl.renderDiplomasForm = (req, res) => {
    res.render('diplomas/newDiploma')
}

//get - diplomas
diplomasCtrl.renderAllDiplomas = async (req, res) => {
    const diplomas = await Diploma.find().lean()
    res.render('diplomas/allDiplomas', {diplomas})
}

//put - diplomas/edit/:id
diplomasCtrl.updateDiploma = (req, res) => {
    res.send('update Diploma')
}

//delete - diplomas/delete/:id
diplomasCtrl.deleteDiploma = (req, res) => {
    res.send('Elimina Diploma')
}

module.exports = diplomasCtrl;