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

const {isAutenticated} = require('../helpers/route.protection')

router.get('/diplomas/add', isAutenticated, renderDiplomasForm)

router.get('/diplomas', isAutenticated, renderAllDiplomas)

router.post('/diplomas/new-diploma', isAutenticated, createDiploma)

router.get('/diploma/edit/:id', isAutenticated, renderUpdateForm)

router.put('/diploma/edit/:id', isAutenticated, updateDiploma)

router.delete('/diploma/delete/:id', isAutenticated, deleteDiploma)


module.exports = router;