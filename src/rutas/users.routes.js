const { Router } = require('express')
const router = Router()
const {
    createUser,
    renderAllUsers,
    renderUsersForm,
    renderUpdateForm,
    updateUser,
    deleteUser
} = require('../controllers/users.controller')


router.get('/users/add', renderUsersForm)

router.get('/users', renderAllUsers)

router.post('/users/new-user', createUser)

router.get('/user/edit/:id', renderUpdateForm)

router.put('/user/edit/:id', updateUser)

router.delete('/user/delete/:id', deleteUser)


module.exports = router;