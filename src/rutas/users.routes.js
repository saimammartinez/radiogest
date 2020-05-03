const { Router } = require('express')
const router = Router()
const {
    createUser,
    renderAllUsers,
    renderUsersForm,
    renderUpdateForm,
    updateUser,
    deleteUser,
    login,
    renderLoginForm,
    logout
} = require('../controllers/users.controller')

const {isAutenticated} = require('../helpers/route.protection')

router.get('/users/add', isAutenticated, renderUsersForm)

router.get('/users', isAutenticated, renderAllUsers)

router.post('/users/new-user', isAutenticated, createUser)

router.get('/user/edit/:id', isAutenticated, renderUpdateForm)

router.put('/user/edit/:id', isAutenticated, updateUser)

router.delete('/user/delete/:id', isAutenticated, deleteUser)

router.get('/users/login',  renderLoginForm)

router.post('/users/login', login)

router.get('/users/logout', logout)

module.exports = router;