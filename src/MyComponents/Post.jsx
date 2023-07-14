import React from 'react'
import {Link} from 'react-router-dom'
import './Post.css'
import { deletePost, likePost } from '../Actions'
import { useDispatch } from "react-redux";

const Post = (props) => {
  let desc = props.post.content.slice(0, 230);
  const dispatch = useDispatch()
  return (
    <>
      <div className="block">
        <div className="head-block">
          <h2>{props.post.title}</h2>
          <i onClick={()=>{dispatch(likePost(props.post))}} className="fa-solid fa-heart like-icon" id={`${props.post.sno}`}></i>
        </div>
        <p>{desc}...<Link to={`/view/${props.post.sno}`}>more</Link></p>
        <div className="button-block">
          <Link onClick={()=>{dispatch(deletePost(props.post))}} className='btn btn-danger'>Delete</Link>
          <Link to={`/view/${props.post.sno}`} className="btn btn-primary">Detail</Link>
        </div>
      </div>

    </>
  )
}

export default Post
