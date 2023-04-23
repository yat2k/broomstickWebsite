import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './landingpage.css';
import Aos from 'aos'


const Mainpage = () => {
  useEffect( () => {
    Aos.init({duration:2000});
  },[]);

  return (
    <div>
       <div className='LandingPage'>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        
       
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap" rel="stylesheet" />
        <div className="header">
         
          <h1 data-aos="fade-in">broomstick</h1>
          <p>Broomstick has come up in search of great talent. We are in search really enthusiast people who can work deligently and with great honesty.  

          </p>
        </div>
        <div className="row1-container">
            
          <div data-aos="fade-left" className="box box-down cyan">
          <Link to ="/fulltime1" className='full'>
            <h2>Fluids/CFD Engineer</h2>
            <p>Apply for the full time role</p>
            <ArrowForwardIcon className='iconContainer' />
            <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
            </Link>
          </div>
          
         
          <div  data-aos="zoom-in" className="box red">
          <Link to ="/fulltime1" className='full'>
            <h2>Electronics Engineer</h2>
            <p>Apply for the full time job role</p>
            <ArrowForwardIcon className='iconContainer' />
            <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
            </Link>
          </div>

          <div data-aos="fade-right" className="box box-down blue">
            <h2>InternShips</h2>
            <p>Apply for internship roles and get a chance to become a part of Broomstick</p>
            <ArrowForwardIcon className='iconContainer' />
            <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
          </div>
        </div>
       
        <footer>
         
        </footer>
      </div>
    </div>
  )
}

export default Mainpage
