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
    
    res.redirect('/diplomas')
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

//post override put - diploma/edit/:id
diplomasCtrl.updateDiploma = async(req, res) => {
    console.log(req.body)
    const {usuariodiploma, tipodiploma, urldiploma, descargadodiploma} = req.body;

    await Diploma.findByIdAndUpdate(req.params.id, { 
        usuario:  usuariodiploma,
        tipoDiploma: tipodiploma,
        urlDiploma: urldiploma,
        descargadoDiploma:descargadodiploma
    })
    res.redirect('/diplomas')
}

//post override delete - diploma/delete/:id
diplomasCtrl.deleteDiploma = async(req, res) => {
    console.log(req.params.id)
    await Diploma.findByIdAndDelete(req.params.id)
    res.redirect('/diplomas')
}
// get - diploma/editDiploma.habs
diplomasCtrl.renderUpdateForm = async (req, res)=>{

    const diplomaEdit = await Diploma.findById(req.params.id).lean()

    if(diplomaEdit.descargadoDiploma==="on"){
        checked = 'checked'
    }else {
        checked=''
    }
    res.render('diplomas/editDiploma.hbs', {diplomaEdit, checked})
}
//{id:req.params.id, usuario:diplomaEdit.usuario, tipo:diplomaEdit.tipoDiploma, url:diplomaEdit.urlDiploma, descargado:checked}
module.exports = diplomasCtrl;