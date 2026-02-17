const postModel = require('../models/post.model')
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")
require('dotenv').config()
const jwt = require("jsonwebtoken")
const userModel = require('../models/user.model')



const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req,res){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"token not provided , unauthorized access"
        })
    }
    console.log(req.body, req.file)
    let decode =null
    try{
        decode = jwt.verify(token,process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message:"user not authorized"
        })
    }
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        folder:"insta-clone"
    })
    const post = await postModel.create(
        {
            caption:req.body.caption,
            imgurl:file.url,
            user:decode.id
        }
    )
    res.status(201).json({
        message:"post is created ",
        post
    })
} 

async function getPostController(req,res){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"token not provided , unauthorized access"
        })
    }
    let decode
    try{
        decode= jwt.verify(token,process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message:"user not authorized"
        })
    }
    const userId = decode.id
    const posts = await postModel.find({
        user:userId
    })
    res.status(200).json({
        messge:"posts feched succesfully",
        posts
    })
}

async function getPostDetailsController(req,res){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({
            message:"Unauthorized Access"
            
        })
    }
    let decode
    try{
        decode = jwt.verify(token,process.env.JWT_SECRET)

    }catch(err){
        return res.status(401).json({
            message:"Invalid token"
        })
    }

    const userId = decode.id
    const postId = req.params.postId

    const post = await postModel.findById(postID)

    if(!post){
        return res.status(404).json({
            message:"post not found"
        })
    }

    const isValidUser =post.user.toString()===userId

    if(!isValidUser){
        res.status(403).json({
            message:"Forbidden content"
        })
    }

    return re.status(201).json({
        message:"post fetched successfully"
        ,post
    })

}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailsController
}