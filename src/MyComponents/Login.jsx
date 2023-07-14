import React, {useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = (e)=>{
    e.preventDefault();

    document.getElementById('emailHelper').innerHTML = ""
    document.getElementById('passwordHelper').innerHTML = ""
    if(email === '' || password === ''){
        if(email === ''){
            document.getElementById('emailHelper').innerText = "Email is required"
        }else if(password === ''){
            document.getElementById('passwordHelper').innerText = "Password is required"
        }
        return;
    }
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={validateForm}>
        <div className="form-group my-3">
            <label htmlFor="email" className='my-2'>Email</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" className='form-control' />
            <span className="text-danger" id='emailHelper'></span>
        </div>

        <div className="form-group my-3">
            <label htmlFor="password" className='my-2'>Password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" className='form-control' />
            <span className="text-danger" id='passwordHelper'></span>
        </div>
        <button type="submit" className='btn btn-primary'>Login</button>
      </form>
    </>
  )
}

export default Login
