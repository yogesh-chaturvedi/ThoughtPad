const express = require('express')
const router = express.Router()
const UserModel = require('../models/User')
const { validateSignup } = require('../middleware/Auth')
const { validateLogin } = require('../middleware/Auth')
const { signup } = require('../controllers/AuthController')
const { login } = require('../controllers/AuthController')

// to save users info. 
router.post('/signup', validateSignup, signup)

// for login
router.post('/login', validateLogin, login)


module.exports = router
