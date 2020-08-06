const express = require('express');
const {sendUserByName} = require('../controllers/users.controller')

const usersRouter = express.Router()

usersRouter
  .route('/:username')
  .get(sendUserByName)

module.exports = usersRouter

