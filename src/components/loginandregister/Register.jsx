import React, { useState } from 'react'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage } from "../../firebase";
import {Close} from "@mui/icons-material"
import { Link } from 'react-router-dom';




const Register = () => {

  const [err,setErr] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault()
         const displayName = e.target[0].value;
         const email = e.target[1].value;
         const password = e.target[2].value;
        //  const file = e.target[3].files[0];

   try{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user)
  })
}
catch(err){
setErr(true);
}
}

return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
            <input  type="text" placeholder='displayName' />
            <input  type="email" placeholder='email' />
            <input  type="password" placeholder='password' />
            
            <button>Sign Up</button>
            {/* {err && <span>Something went wrong</span>} */}
        </form>
        {err && <span className='errorMessage'>Something went wrong!! </span>}
        <p>You don't have an account? <Link  className="linkSection" to = "/login">Login</Link></p>
        <Link to ="/"><Close className='closebtn'/></Link>




        </div>
      
    </div>
  )
}

export default Register
