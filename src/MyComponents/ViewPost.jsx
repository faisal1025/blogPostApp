import { Link, useParams } from "react-router-dom"
import './ViewPost.css'
import { useSelector } from "react-redux";

const ViewPost = ()=>{
    const { id } = useParams();
    const posts = useSelector((state)=> state.postModification);
    const post = posts.filter((e)=>{
        return e.sno === Number(id)
    })
    return (
        <>
            <h1>ViewPost</h1>
            <div className="post-head my-3">
                <h3>{post[0].title}</h3>
                <Link to={`/updatePost/${post[0].sno}`}><i className="fa-solid fa-pen-to-square"></i></Link>
            </div>
            <p>{post[0].content}</p>
        </>
    )
}

export default ViewPost;