const usersServices = require('./users.services')
const router = require('express').Router()
const passportJWT = require('../middleware/auth.middleware')
const roleMiddleware = require('../middleware/role.Middleware')

router.route('/')
    .get(usersServices.getAllUsers)
    .post(usersServices.postUser)

router.route('/me')
    .get(passportJWT.authenticate('jwt', { session: false }), usersServices.getMyUser)
    .patch(passportJWT.authenticate('jwt', { session: false }), usersServices.updateMyUser)
    .delete(passportJWT.authenticate('jwt', { session: false }), usersServices.deleteMyUser)

router.route('/:id')
    .get(usersServices.getUserById)
    .patch(passportJWT.authenticate('jwt', { session: false }), roleMiddleware, usersServices.updateUser)
    .delete(passportJWT.authenticate('jwt', { session: false }), roleMiddleware, usersServices.deleteUser)


module.exports = router