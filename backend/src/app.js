const express = require('express')
const authRouter= require('./routes/auth.route.js')
const cookieParser = require("cookie-parser")
const postRouter = require('./routes/post.route.js')
const userRouter = require('./routes/user.route.js')
const cors = require('cors')


const app = express()
app.use(cors({
    credentials:true,
    origin: "http://localhost:5173"
}))


app.use(express.json());
app.use(cookieParser())
app.use('/api/auth',authRouter)
app.use('/api/auth',postRouter)
app.use('/api/user',userRouter)
module.exports=app