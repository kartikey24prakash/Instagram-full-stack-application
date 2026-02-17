const userModel = require('../models/user.model')
const crypto = require('crypto')
const jwt = require("jsonwebtoken")
require('dotenv').config()



async function registerController(req, res){
    const { email, username, password, bio, profileImage } = req.body

    const isuserAlreadyExsits = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isuserAlreadyExsits) {
        return res.status(409).json({
            message: "User already exists" + (isuserAlreadyExsits.email == email ? "Email already exists" : "Username already exists")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex');

    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio,
        profileImage
    })

    const token = jwt.sign({
        id: user._id,
        username:user.username
    }, process.env.JWT_SECRET, { expiresIn: "1d" })

    res.cookie("token", token)

    res.status(201).json({
        message: "User Registered successfully",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}


async function loginController (req, res)  {
    const { username, email, password } = req.body
    const user = await userModel.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })
    if (!user) {
        return res.status(401).json({
            message: "User not found"
        })
    }
    const hash = crypto.createHash('sha256').update(password).digest('hex')
    const isPasswordValid = hash == user.password
    if (!isPasswordValid) {
        return res.statua(401).json({
            message: "password invalid"
        })
    }
    const token = jwt.sign(
        { id: user._id ,username:user.username},
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )
    res.cookie("token", token)
    res.status(200)
        .json({
            message: "User loggedIn successfully.",
            user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profileImage: user.profileImage
            }
        })
}

module.exports={
    registerController,
    loginController
}