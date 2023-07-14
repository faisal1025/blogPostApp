import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../Actions'

const AddPost = ()=>{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const posts = useSelector((state)=> state.postModification);

    const dispatch = useDispatch()

    const submit = (event)=>{
        event.preventDefault()
        if(title === '' || content === ''){
            alert('Title and Content both are required')
            return
        }
        let sno = (posts.length > 0 ? posts[posts.length-1].sno+1 : 1)
        dispatch(addPost({sno, title, content}))
        alert('Post added successfully')
    }

    return(
    <>
        <h1>AddPost</h1>
    
        <form onSubmit={submit}>
            <div className="form-group my-3">
                <label className="my-2" htmlFor="title">Title</label>
                <input value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Add a Title" />
            </div>
            <div className="form-group my-3">
                <label className="my-2" htmlFor="content">Content</label>
                <textarea value={content} onChange={(e)=>{setContent(e.target.value)}} className="form-control" id="content" placeholder="Write your blog here" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
    )
}

export default AddPost;