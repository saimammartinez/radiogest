const diplomasCtrl = {};

const Diploma = require('../models/Diploma')

//post - diplomas/new-diploma
diplomasCtrl.createDiploma = async (req, res) => {

    const {
        usuariodiploma,
        tipodiploma,
        urldiploma,
        descargadodiploma
    } = req.body


    if (descargadodiploma == undefined) {
        valDescargado = 'off'
    } else {
        valDescargado = 'on'
    }

    console.log(urldiploma)

    newDiploma = new Diploma({
        usuario: usuariodiploma,
        tipoDiploma: tipodiploma,
        urlDiploma: urldiploma,
        descargadoDiploma: valDescargado
    })
    try {
        await newDiploma.save();
        req.flash('msg_ok', 'Diploma añadido correctamente')

    } catch (error) {
        req.flash('msg_err', 'Error al guardar: ' + error )
    }
    
    res.redirect('/diplomas')
}

//get - diplomas/add
diplomasCtrl.renderDiplomasForm = (req, res) => {
    res.render('diplomas/newDiploma')
}

//get - diplomas
diplomasCtrl.renderAllDiplomas = async (req, res) => {
    const diplomas = await Diploma.find().sort({"tipoDiploma":1, "usuario":1}).lean()
    res.render('diplomas/allDiplomas', { diplomas })
}

//post override put - diploma/edit/:id
diplomasCtrl.updateDiploma = async (req, res) => {

    const { usuariodiploma, tipodiploma, urldiploma, descargadodiploma, selectedpdf } = req.body;
    if (!descargadodiploma) {
        valDescargado = 'off'
    } else {
        valDescargado = 'on'
    }

    if (selectedpdf == '') {
        valorpdf = urldiploma
    } else {
        valorpdf = selectedpdf
    }


    await Diploma.findByIdAndUpdate(req.params.id, {
        usuario: usuariodiploma,
        tipoDiploma: tipodiploma,
        urlDiploma: valorpdf,
        descargadoDiploma: valDescargado
    })
    req.flash('msg_ok', 'Diploma actualizado correctamente')
    res.redirect('/diplomas')
}

//post override delete - diploma/delete/:id
diplomasCtrl.deleteDiploma = async (req, res) => {

    await Diploma.findByIdAndDelete(req.params.id)
    req.flash('msg_ok', 'Diploma eliminado correctamente')
    res.redirect('/diplomas')
}
// get - diploma/editDiploma.habs
diplomasCtrl.renderUpdateForm = async (req, res) => {

    const diplomaEdit = await Diploma.findById(req.params.id).lean()

    if (diplomaEdit.descargadoDiploma === "on") {
        checked = 'checked'
    } else {
        checked = ''
    }
    res.render('diplomas/editDiploma.hbs', { diplomaEdit, checked })
}
//{id:req.params.id, usuario:diplomaEdit.usuario, tipo:diplomaEdit.tipoDiploma, url:diplomaEdit.urlDiploma, descargado:checked}
module.exports = diplomasCtrl;