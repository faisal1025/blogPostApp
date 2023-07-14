import { ADD_POST, DELETE_POST, UPDATE_POST, LIKE_POST } from "../constant"        

export const addPost = (data)=>{
    return ({
        type:ADD_POST,
        data:data
    })
}

export const deletePost = (data)=>{
    return ({
        type:DELETE_POST,
        data:data
    })
}

export const updatePost = (data, title, content)=>{
    return ({
        type:UPDATE_POST,
        data:data,
        title:title,
        content:content
    })
}

export const likePost = (data)=>{
    return ({
        type:LIKE_POST,
        data:data
    })
}