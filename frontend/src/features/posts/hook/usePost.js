import { PostContext } from '../post.context'
import { getFeed ,createPost,likePost,unlikePost} from '../services/post.api'
import { use, useContext, useEffect } from 'react'

export const usePost = () => {
    const context = useContext(PostContext)

    const { loading, setLoading, post, setPost, feed, setFeed } = context

    const handleGetFeed = async () => {
        // console.log("feed")
        setLoading(true)

        const data = await getFeed()
        setFeed(data.posts)
        // console.log(data)

        setLoading(false)

    }
    const handleCreatePost = async (imageFile, caption) => {
        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed([data.post, ...feed])
        setLoading(false)
    }
    
    const handlelike = async (post)=>{
        
        const data =await likePost(post)
        await handleGetFeed()
    }
    const handleunlike = async (post)=>{
        
        const data =await unlikePost(post)
        await handleGetFeed()
    }
    useEffect(() => {
        handleGetFeed()
    }, [])
    return { loading, feed, post, handleGetFeed, handleCreatePost, handlelike,handleunlike }
}