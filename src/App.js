import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import AddPost from './MyComponents/AddPost'
import Posts from './MyComponents/Posts'
import ViewPost from './MyComponents/ViewPost'; 
import UpdatePost from './MyComponents/UpdatePost';
import SignUp from './MyComponents/SignUp';
import Login from './MyComponents/Login';
import { useSelector } from 'react-redux';
import { createContext } from 'react';

export const AllPost = createContext()

function App() {
  
  const posts = useSelector((state)=>{return state.postModification})

  return (
    <>
      <header>
        <nav className='navbar'>
          <span className='navbar-title'>
            {/* <img src='' alt='logo'/> */}
            <Link to='/'>Blog-Post</Link>
          </span>
          <ul className='navbar-list'>
            <li className='nav-item'><Link to='/'>Home</Link></li>
            <li className='nav-item'><Link to='#'>Title</Link></li>
            <li className='nav-item'><Link to='#'>About</Link></li>
            <li className='nav-item'><Link to='/login'>Login</Link></li>
            <li className='nav-item'><Link to='/signup'>SignUp</Link></li>
          </ul>
        </nav>
      </header>

      <section className='main'>
        <AllPost.Provider value={posts}>
          <Routes>
              <Route exact path='/' element={<Posts />} />
              <Route exact path='/addPost' element={<AddPost />} />
              <Route exact path='/view/:id' element={<ViewPost />} />
              <Route exact path='/updatePost/:id' element={<UpdatePost />} />
              <Route exact path='/signup' element={<SignUp />} />
              <Route exact path='/login' element={<Login />} />
          </Routes>
        </AllPost.Provider>
      </section>

      <footer>
          <div className='text-center'> Copyright &copy; BlogPost.com </div>
      </footer>
    </>
  );
}

export default App;
