const { Router } = require('express')
const router = Router()
const {
    createDiploma,
    renderAllDiplomas,
    renderDiplomasForm,
    updateDiploma,
    renderEditDiploma,
    deleteDiploma
} = require('../controllers/diplomas.controller')


router.get('/diplomas/add', renderDiplomasForm)

router.get('/diplomas', renderAllDiplomas)

router.post('/diplomas/new-diploma', createDiploma)

// router.get('/diplomas/edit/:id', renderEditDiploma)

router.put('/diplomas/edit/:id', updateDiploma)

router.delete('/diplomas/delete/:id', deleteDiploma)


module.exports = router;