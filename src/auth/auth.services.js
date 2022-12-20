const authControllers = require('./auth.controllers')
const jsonwebtoken = require('jsonwebtoken')
const jwtSecret = require('../../config').api.jwtSecret

const postLogin = (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        authControllers.verifyCredentials(email, password)
            .then(data => {
                if (data) {
                    const token = jsonwebtoken.sign({
                        id: data.id,
                        email: data.email,
                        role: data.role
                    }, jwtSecret)
                    res.status(200).json({ message: 'Login successed', token })
                } else {
                    res.status(400).json('Invalid Credentials')
                }
            })
            .catch(err => {
                res.status(400).json({ message: err.message })
            })
    } else {
        res.status(400).json({ message: 'Missing data', fields: { email: 'example@example.com', password: 'string' } })
    }
}

const postRecoveryToken = (req, res) => {

    const { email } = req.body
    authControllers.createRecoveryToken(email)
        .then((data) => {
            if (data) {
                mailer.sendMail({
                    from: '<test.academlo@gmail.com>',
                    to: email,
                    subject: 'Recuperación de Contraseña',
                    html: `<a href='${config.api.host}/api/v1/auth/recovery-password/${data.id}'>Recuperar contraseña</a>`
                })
            }
            res.status(200).json({ message: 'Email sended!, Check your inbox' })
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    postLogin,
    postRecoveryToken
}