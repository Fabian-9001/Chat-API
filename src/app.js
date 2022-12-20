//Dependencies and imports
const express = require('express')
const config = require('../config')
const database = require('./utils/database')
const initModels = require('./models/initModels')
const usersRoutes = require('./users/users.router')
const authRoute = require('./auth/auth.router')
const cors = require('cors')
const conversationRouter = require('./conversations/conversations.router')

//Database
const app = express()
app.use(cors())

database.authenticate()
    .then(() => console.log('This database is authenticated'))
    .catch(err => console.log(err))

database.sync()
    .then(() => console.log('This database is synced'))
    .catch(err => console.log(err))

initModels()

//Initial config
app.use(express.json())


//Routes
app.get('/', (req, res) => {
    res.status(200).json('Ok!')
})

app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/conversations', conversationRouter)

//Server
app.listen(config.api.port, () => {
    console.log(`This server is active in ${config.api.host}`)
})