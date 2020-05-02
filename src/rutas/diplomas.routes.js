const { Router } = require('express')
const router = Router()
const {
    createDiploma,
    renderAllDiplomas,
    renderDiplomasForm,
    renderUpdateForm,
    updateDiploma,
    deleteDiploma
} = require('../controllers/diplomas.controller')


router.get('/diplomas/add', renderDiplomasForm)

router.get('/diplomas', renderAllDiplomas)

router.post('/diplomas/new-diploma', createDiploma)

router.get('/diploma/edit/:id', renderUpdateForm)

router.put('/diploma/edit/:id', updateDiploma)

router.delete('/diploma/delete/:id', deleteDiploma)


module.exports = router;