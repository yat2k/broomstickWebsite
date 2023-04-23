import { LibraryBooks } from '@mui/icons-material'
import React, { useState } from 'react'
import './Internshipform.css'
import axios from 'axios'

function Internshipform  () {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [number,setNumber] = useState('');
  const [role,setRole] = useState('');
  const [cv,setCv] = useState('');
  const [hire,setHire] = useState('');
  const [date,setDate] = useState('');



  const onSubmit = (e) =>{
    e.preventDefault();
    const data ={
      Username:username,
      Email:email,
      Number:number,
      Role:role,
      Cv:cv,
      Hire:hire,
      Date:date 
    }
  
    axios.post('https://sheetdb.io/api/v1/ffzsii9ryowin',data).then((response) =>{
      console.log(response);
      setUsername('');
      setEmail('');
      setNumber('');
      setRole('');
      setCv('');
      setHire('');
      setDate('');
    })
      
     
  }

  return (
    <>
      <div className='mainHolder'>
        <h1>ENTER YOUR CREDENTIALS!</h1>
        <div className="login-box">
          <form onSubmit={onSubmit}>
            <div className="user-box">
              <input type="text" name="" onChange={(e) =>setUsername(e.target.value)} value={username} required/>
              <label>Username</label>
            </div>

            <div className="user-box">
              <input type="email" name="" onChange={(e) =>setEmail(e.target.value)} value={email} required />
              <label>E-mail</label>
            </div>

            <div className="user-box">
              <input type="number" name="" onChange={(e) =>setNumber(e.target.value)} value={number} required/>
              <label>Phone Number</label>
            </div>

            <div className="user-box1">
              <input type="text" name="" onChange={(e) =>setRole(e.target.value)} value={role} required/>
              <label>You are applying for which role?</label>
            </div>

            <div className="user-box1">
              <input type="text" name="" onChange={(e) =>setCv(e.target.value)} value={cv} required />
              <label>Attach your CV link</label>
            </div>

            <div className="user-box">
              <textarea type="text" name="" onChange={(e) =>setHire(e.target.value)} value={hire} required />
              <label>Why should we hire you</label>
            </div>

            <div className="user-box2">
              <input type="text" name="" onChange={(e) =>setDate(e.target.value)} value={date} required />
              <label>Are you available for an in-office job in Mysuru, starting immediately
                ?<br />If not,what is the earliest date you can start this job?
              </label>
            </div>

            <a href="#" >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Apply Now
            </a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Internshipform


