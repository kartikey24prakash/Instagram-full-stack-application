const express = require('express')
const postRouter = express.Router()
const postController= require('../controllers/post.controller')
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })
const identifyUser=require('../middleware/auth.middleware.js')



postRouter.post('/',upload.single("chacha"),identifyUser, postController.createPostController)
postRouter.get('/',identifyUser, postController.getPostController)
postRouter.get("/details/:postId",identifyUser, postController.getPostDetailsController)

postRouter.post('/like/:postId',identifyUser,postController.likePostController)




module.exports=postRouter 