import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import './landg.css'
import {Close} from "@mui/icons-material"
import Navbar from "../navbar/Navbar";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <>
      <Navbar/>
    <div className="formContainer">
    
      <div className="formWrapper">
      
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required/>
          <button>Sign in</button>
          {err && <span className="errorMessage">Wrong Email-id or password</span>}
        </form>
        <p>You don't have an account? <Link  className="linkSection" to="/register">Register</Link></p>
        <Link to ="/"><Close className='closebtn'/></Link>
      </div>
    </div>
    </>
    
  );
};

export default Login;