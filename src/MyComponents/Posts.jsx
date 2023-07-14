import React, { useContext } from 'react'
import Post from './Post'
import {Link} from 'react-router-dom'
import './Posts.css'
import { AllPost } from '../App'

const Posts = ()=>{
    const posts = useContext(AllPost)
    return (
        <>
            <div className="add-post-block">
                <Link to='/addPost' className='btn btn-primary'>Add Post</Link>
            </div>

            <h1>Posts</h1>
            
            {posts.length === 0 ? <p>No any posts</p> :
            <ol className='post-list'>
                {posts.map((post)=>{
                    return(
                        <li className='list-item' key={post.sno}>
                        <Post post = {post} />    
                        </li>
                    ) 
                })}
            </ol> 
            }       
        </>
    )
}

export default Posts;