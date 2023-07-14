import React, {useContext, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updatePost } from '../Actions';
import { AllPost } from '../App';

const UpdatePost = () => {
    const { id } = useParams()
    const posts = useContext(AllPost)
    const dispatch = useDispatch()

    const post = posts.filter((item)=>{
        return item.sno === Number(id)
    })

    const [title, setTitle] = useState(post[0].title)
    const [content, setContent] = useState(post[0].content)

    return (
        <>
            <h1>Update Post</h1>

            <form onSubmit={(e)=>{
                e.preventDefault()
                if(title === '' || content === '') alert('Title and Content can\'t be empty');
                else {dispatch(updatePost(post[0], title, content)); alert('Post updated successfully');}
            }}>
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
export default UpdatePost;