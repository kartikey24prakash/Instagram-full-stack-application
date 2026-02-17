const followModel = require('../models/follow.model')
const userModel = require('../models/user.model')


async function followUserController(req,res){
    const followerUserName = req.user.username
    const followeeUserName=req.params.username

    
    if(followeeUserName == followerUserName){
        return res.status(400).json({
            message:"You cannot follow yourself"
        })   
    }

    const isFolloweeExists = await userModel.findOne({
        username:followeeUserName
    })
    if(!isFolloweeExists){
        return res.status(404).json({
            message:"User you are trying to follow not exists"
        })
    }
    const isAlreadyFollowing = await followModel.findOne({
        follower:followerUserName,
        followee:followeeUserName
    })
    
    if(isAlreadyFollowing){
        return res.status(200).json({
            message:`you already follow ${followeeUserName}`
        })
    }

    const followRecord = await followModel.create({
        follower:followerUserName,
        followee:followeeUserName
    })
    res.status(201).json({
        message:`you are now folllowin ${followeeUserName}`,
        followRecord
    })
}

async function unfollowUserController(req,res){
    const followerUserName = req.user.username
    const followeeUserName=req.params.username

    const isAlreadyFollowing = await followModel.findOne({
        follower:followerUserName,
        followee:followeeUserName
    })
    if(!isAlreadyFollowing){
        return res.status(200).json({
            message:`you are not following ${followeeUserName}`
        })
    }
    await followModel.findByIdAndDelete(isAlreadyFollowing._id)

    res.status(200).json({
        message:`You unfollow ${followeeUserName}`
    })


}
module.exports={
    followUserController,
    unfollowUserController
}