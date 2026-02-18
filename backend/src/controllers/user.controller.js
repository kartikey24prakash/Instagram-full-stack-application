const followModel = require('../models/follow.model')
const userModel = require('../models/user.model')

/*
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
*/

async function followUserController(req, res) {
  const follower = req.user.username
  const followee = req.params.username

  if (follower === followee) {
    return res.status(400).json({
      message: "You cannot follow yourself"
    })
  }

  const userExists = await userModel.findOne({ username: followee })
  if (!userExists) {
    return res.status(404).json({
      message: "User not found"
    })
  }

  try {
    const follow = await followModel.create({
      follower,
      followee
    })

    res.status(201).json({
      message: "Follow request sent",
      follow
    })
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({
        message: "Follow request already exists"
      })
    }
    throw err
  }
}


async function acceptFollowRequest(req, res) {
  const followId = req.params.id
  const username = req.user.username
  

  const follow = await followModel.findOne({
    _id: followId,
    followee: username,
    status: "pending"
  })

  if (!follow) {
    return res.status(404).json({
      message: "Follow request not found"
    })
  }

  follow.status = "accepted"
  await follow.save()
  res.status(200).json({
    message: "Follow request accepted"
  })
}


//reject

async function rejectFollowRequest(req, res) {
  const followId = req.params.id
  const username = req.user.username

  if (!followId) {
    return res.status(400).json({ message: "Follow ID missing" })
  }

  const followRequest = await followModel.findOne({
    _id: followId,
    followee: username,
    status: "pending"
  })

  if (!followRequest) {
    return res.status(404).json({
      message: "Follow request not found or already handled"
    })
  }

  followRequest.status = "rejected"
  await followRequest.save()

  res.status(200).json({
    message: "Follow request rejected"
  })
}


async function getFollowRequests(req, res) {
  const username = req.user.username

  const requests = await followModel.find({
    followee: username,
    status: "pending"
  })
  res.status(200).json({
    count: requests.length,
    requests
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
    unfollowUserController,
    acceptFollowRequest,
    getFollowRequests,
    rejectFollowRequest
}