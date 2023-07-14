import React, {useState} from 'react'

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [valid, setValid] = useState(true)
    
    const isSymbol = (password)=>{
        if(password.indexOf('@') > -1 || password.indexOf('#') > -1 || password.indexOf('$') > -1 || password.indexOf('%') > -1 || password.indexOf('&') > -1){
            return true;
        }
        return false;
    }
  const isNumber = (password)=>{
    for (const char of password) {
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}
const isCapital = (password)=>{
    for (const letter of password) {
        if (letter.toUpperCase() === letter) {
            return true;
        }
    }
    return false;
}
const isSmall = (password)=>{
    for (const letter of password) {
        if (letter.toLowerCase() === letter){
            return true;
        }
    }
    return false;
}

const validateForm = (e)=>{
    setValid(true)
    e.preventDefault()
    // For name validation
    document.getElementById('emailHelper').innerHTML = ""
    document.getElementById('nameHelper').innerHTML = ""
    document.getElementById('passwordHelper').innerHTML = ""
    document.getElementById('confpasswordHelper').innerHTML = ""
    if(name === '' || name.length < 4){
        if(name === ''){
            document.getElementById('nameHelper').innerText = "Name is required"
            setValid(false);
        }else if(name.length < 4){
            document.getElementById('nameHelper').innerText = "Name can not be less than 4 character"
            console.log('It is less than 4')
            setValid(false);
        }
        return;
    }
    // For email validation
    if(email === ''  || email.indexOf('@') === -1){
        if(email === ''){
            document.getElementById('emailHelper').innerText = "Email is required"
            setValid(false);
        }else if(email.indexOf('@') === -1){
            document.getElementById('emailHelper').innerText = "Enter a valid email. email must contain @."
            setValid(false);
        }
        return;
    }
    // For password validation
    if(password === '' || password.length < 8 || (!isSymbol(password)) || (!isNumber(password)) || (!isCapital(password)) || (!isSmall(password))){
        if(password === ''){
            document.getElementById('passwordHelper').innerText = "Password is required"
            setValid(false);
        }else if(password.length < 8){
            document.getElementById('passwordHelper').innerText = "Password can not be less than 8 character"
            setValid(false);
        }else if(!isSymbol(password)){
            document.getElementById('passwordHelper').innerText = "Password must contain a symbol '@, #, %, &, $'"
            setValid(false);
        }else if(!isNumber(password)){
            document.getElementById('passwordHelper').innerText = "Password must contain a number"
            setValid(false);
        }else if(!isCapital(password)){
            document.getElementById('passwordHelper').innerText = "Password must contain a upper case letter"
            setValid(false);
        }else if(!isSmall(password)){
            document.getElementById('passwordHelper').innerText = "Password must contain a lower case letter"
            setValid(false);
        }
        return;
    }
    // For confPassword validation
    if(confPassword === '' || confPassword !== password){
        if(confPassword === ''){
            document.getElementById('confpasswordHelper').innerText = "Confirm Password is required"
            setValid(false);
        }else if(confPassword !== password){
            document.getElementById('confpasswordHelper').innerText = "Confirm Password and Password not match"
            setValid(false);
        }
        return;
    }
    
    return valid;
}

return (
    <>
         <h1>Register</h1>

         <form onSubmit={validateForm}>
            <div className="form-group my-3">
                <label htmlFor="name" className='my-2'>Name</label>
                <input type='text' onChange={(e)=>{setName(e.target.value)}} className='form-control' id='name' />
                <span className="text-danger" id='nameHelper'></span>
            </div>

            <div className="form-group my-3">
                <label htmlFor="email" className='my-2'>Email</label>
                <input type='email'onChange={(e)=>{setEmail(e.target.value)}} className='form-control' id='email' />
                <span className="text-danger" id='emailHelper'></span>
            </div>

            <div className="form-group my-3">
                <label htmlFor="password" className='my-2'>Password</label>
                <input type='password' onChange={(e)=>{setPassword(e.target.value)}} className='form-control' id='password' />
                <span className="text-danger" id='passwordHelper'></span>
            </div>

            <div className="form-group my-3">
                <label htmlFor="confirmpassword" className='my-2'>Confirm Password</label>
                <input type='password' onChange={(e)=>{setConfPassword(e.target.value)}} className='form-control' id='confirmpassword' />
                <span className="text-danger" id='confpasswordHelper'></span>
            </div>

            <button type="submit" className='btn btn-primary'>Register</button>
         </form>
    </>
  )
}

export default SignUp

