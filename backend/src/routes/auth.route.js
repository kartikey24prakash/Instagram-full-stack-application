const express = require('express')

const authRouter = express.Router()
const authController = require("../controllers/auth.controller")
const identifyUser = require('../middleware/auth.middleware')


authRouter.post('/register',authController.registerController)

authRouter.post('/login',authController.loginController)

/**
 * @route GET /api/auth/get-me
 * @desc Get the currently logged in user's information
 * @access Private
 */
authRouter.get('/get-me',identifyUser,authController.getMeController)
module.exports = authRouter

