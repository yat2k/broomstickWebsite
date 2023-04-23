import React,{useEffect} from 'react';
// import {Link} from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './landingpage.css';
import Aos from 'aos';
import './landingpage.css';


const Mainpage = () => {
  useEffect( () => {
    Aos.init({duration:2000});
  },[]);

  return (
  
 <div className='LandingPage'>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap" rel="stylesheet" />
        
        <div className="header1">
          <h2 data-aos="fade-in">Internship Roles</h2>
        </div>

        <div className="row1-container1">  
          <div  className="box1  blue">
            <h2>Electronics and Communications</h2>
           <h3>Requirements</h3>
           <p>
           1) Arduino and Raspberry PI Programming.<br />
           2) Should have some hands-on experience (Personal projects experience is acceptable)
           </p>
           <div class="box-1">
              <div class="btn btn-one">
                <span>Apply Now</span>
              </div>
            </div>
          </div>

          <div  className="box1  blue">
            <h2>AI/ML Enthu Cutlet</h2>
            <h3>Requirements</h3>
            <p>
              1) Image Processing and Mapping based project.<br/>
              2) Able to design Automated Navigation.<br/>
              3) ROS Programming.<br/>
              4) Opportunity to be affiliated with Mathworks. <br/>
            </p>
            <div class="box-1">
              <div class="btn btn-one">
                <span>Apply Now</span>
              </div>
            </div>
          </div>

          <div  className="box1 blue">
            <h2>Graphic Designers</h2>
            <h3>Reguirements</h3>
            <p>
              1) Should be able to design crazy UI (should have idea of human centered design).<br/>
              2) Design crazy marketing content.
            </p>
            <div class="box-1">
              <div class="btn btn-one">
                <span>Apply Now</span>
              </div>
            </div>
          </div>

          <div  className="box1 blue">
            <h2>Developers</h2>
            <h3>Reguirements</h3>
            <p>
              1) Development of an Edutech Platform.<br/>
              2) App Development.
            </p>
            <div class="box-1">
              <div class="btn btn-one">
                <span>Apply Now</span>
              </div>
            </div>
          </div>

          <div  className="box1  blue heightfix">
            <h2>Business Development and Process Mangers</h2>
            <h3>Requirements</h3>
            <p>
              1) For lifeskills-Should be keen to explore and learn business fundamentals- Unit Economics,Financial Modelling and Marketing<br/>
              2) Good at Communications.<br/>
              3) Good at Growth Hacking.<br/>
              4) Organisation and event management capabilities
              5) Develop marketing stategies
            </p>
            <div class="box-1">
              <div class="btn btn-one">
                <span>Apply Now</span>
              </div>
            </div>
          </div>
          
        </div>
       
       
 </div>
   
  )
}

export default Mainpage
