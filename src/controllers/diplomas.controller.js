const diplomasCtrl = {};

//get
diplomasCtrl.renderDiplomasForm=(req, res)=>{
    res.send('diploma add') 
}

//post
diplomasCtrl.createDiploma= (req, res)=>{
    res.send('New diploma ') 
}


diplomasCtrl.renderDiplomas=(req, res)=>{
    res.send('todos los Diplomas')
}
//get
diplomasCtrl.renderEditDiploma=(req, res)=>{
    res.send('form Diploma')
}

//post
diplomasCtrl.updateDiploma=(req, res)=>{
    res.send('update Diploma')
}



module.exports = diplomasCtrl;