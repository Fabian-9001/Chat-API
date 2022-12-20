const nodemailer = require('nodemailer')
const { mailPassword } = require('../../config').api

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'garciacruzfabian23@gmail.com',
        pass: mailPassword
    }
})

module.exports = transport