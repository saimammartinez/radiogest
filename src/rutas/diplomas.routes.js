const { Router } = require('express')
const router = Router()
const { renderDiplomasForm, createDiploma, renderDiplomas, updateDiploma, renderEditDiploma } = require('../controllers/diplomas.controller')

router.get('/diplomas/add', renderDiplomasForm)

router.post('/diplomas/add', createDiploma)

router.get('/diplomas', renderDiplomas)

router.get('/diplomas/edit/:id', renderEditDiploma)

router.post('/diplomas/edit/:id', updateDiploma)

module.exports = router;