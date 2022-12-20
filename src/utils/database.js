const { Sequelize } = require('sequelize')
const config = require('../../config')

const database = new Sequelize({
    dialect: 'postgres',
    host: config.db.host,
    port: config.db.port,
    username: config.db.user,
    password: config.db.password,
    database: config.db.name
})

module.exports = database