const express = require('express');
const apiRouter = require('./Routes/api.routes')
const { handleCustomError, handleServerErrors } = require('./errors')
const app = express()
app.use(express.json())

app.use('/api', apiRouter)

app.use(handleCustomError)
app.use(handleServerErrors)

module.exports = app;