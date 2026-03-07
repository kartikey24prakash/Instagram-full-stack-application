import { PostContext } from '../post.context'
import {getFeed} from '../services/post.api'
import { use, useContext ,useEffect} from 'react'

export const usePost =()=>{
    const context = useContext(PostContext)

    const { loading, setLoading, post, setPost, feed, setFeed } = context

    const handleGetFeed = async ()=>{
        // console.log("feed")
        setLoading(true)
        
        const data =await getFeed()
        setFeed(data.posts)
        // console.log(data)

        setLoading(false)

    }
    return{loading,feed,post,handleGetFeed}
}