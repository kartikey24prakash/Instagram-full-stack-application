import { Children, createContext, useState } from "react";

export const PostContext = createContext()

export const PostContextProvider =({children})=>{
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState(null)
    const [feed, setFeed] = useState(null)

    return (
        <PostContext.Provider value={{loading,post,setLoading,setPost,feed,setFeed}}>
            {children}
        </PostContext.Provider>
    )
}