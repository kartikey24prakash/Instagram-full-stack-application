const express = require('express')
const userRouter = express.Router()
const userController =  require('../controllers/user.controller')
const identifyUser = require('../middleware/auth.middleware')

userRouter.post('/follow/:username',identifyUser,userController.followUserController)
userRouter.patch('/follow/:id/accept',identifyUser,userController.acceptFollowRequest)


userRouter.get('/follow/request',identifyUser,userController.getFollowRequests)

userRouter.post('/unfollow/:username',identifyUser,userController.unfollowUserController)

module.exports=userRouter