require('dotenv').config()

module.exports = {
    api: {
        port: process.env.API_PORT,
        host: process.env.API_HOST,
        jwtSecret: process.env.JWT_SECRET,
        mailPassword: process.env.MAIL_PASSWORD
    },
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME
    }
}