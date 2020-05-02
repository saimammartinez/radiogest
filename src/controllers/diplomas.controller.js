const diplomasCtrl = {};



//post - diplomas/new-diploma
diplomasCtrl.createDiploma= (req, res)=>{
    console.log(req.body)
    
}

//get - diplomas/add
diplomasCtrl.renderDiplomasForm=(req, res)=>{
    res.render('diplomas/newDiploma')
}

//get - diplomas
diplomasCtrl.renderAllDiplomas=(req, res)=>{
    res.send('todos los Diplomas')
}

//put - diplomas/edit/:id
diplomasCtrl.updateDiploma=(req, res)=>{
    res.send('update Diploma')
}

//delete - diplomas/delete/:id
diplomasCtrl.deleteDiploma=(req,res)=>{
    res.send('Elimina Diploma')
}

module.exports = diplomasCtrl;