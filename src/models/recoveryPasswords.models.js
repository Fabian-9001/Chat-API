const { DataTypes } = require('sequelize')
const database = require('../utils/database')
const Users = (require('./users.models'))

const RecoveryPasswords = database.define('recovery_passwords', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    used: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = RecoveryPasswords