import React from "react";
import { Carousel } from '@mantine/carousel';

import journey from "../assets/ourJourneyText.png";
import "./journey.css";
import BroomstickFounders from "../assets/BroomstickFounders.png";
import journeyFinale from '../assets/journeyFinale.jpeg'
import dirtyTable from '../assets/Dirty table.jpg'
import ktechNewOffice from '../assets/Ktech New Office - 1st Day.jpg'
import img2 from '../assets/img2.png'
import newOffice from '../assets/New office - 1.jpeg'
import chassisTest from '../assets/Chassis testing - 2.jpg'
import lastToLeave from '../assets/Last one to leave.jpg'
import founderSelfie from '../assets/journeyFounderSelfie.png'

const Journey = () => {
  return (
    <>
      <img src={journey} className="journeyImg" alt="journey"></img>
      <div className="left page">
        <img src={BroomstickFounders} alt="founders" className="journeyFoundersImg"/>
      </div>
      <div className="right page">
      <article>
        <h1 style={{
            fontFamily : 'Anton,sans-serif',
            fontSize : '100px',
            marginBottom : 0,
            marginTop : 10
        }}> The Journey</h1>
        <br/>
        <p style={{
          width:"60%",
          margin:"auto",
          fontSize: "24px",
          textAlign: "left",
        }}>1. It started off as engineering project –– “The West has Vacuum cleaners for their carpeted floors but Us, Why are we still using Centuries old tech – Time we need an upgrade!”</p>
        </article>
      </div>
      <br/>
      <div className="left page">
      <article>
      <h2> The Journey</h2>
      <p style={{
          width:"80%",
          margin:"auto",
          fontSize: "24px",
          textAlign:"left",
        }}>2.Just then TiEPitchfest was announced – We planned to participate and in record 45 days – We put together a working-prototype and business plan!<br/>
      3.Cometh the PitchFest, Cometh the Zeal - we emerge in TOP 4 out of 48 startups across Karnataka, competing against funded start-ups – We were rightfully the Under-dogs!<br/>
      4.Thanks to Ktech and TiE Mysuru, we got a sponsored incubation for 6 months at Ktech – We worked to perfect our business plan and designs and put together a completely in-house designed prototype to demonstrate our tech capability and competed at the Elevate Event!<br/>
      5.But this journey of 6 months wasn’t easy, We did have our share of ups and down!<br/>
      6.We have since then showcased our work. This strengthened our resolute to solve the cleaning problems of India and come up with the best-in-class solutions! We are now at NIE and We are on constant lookout for Crazy-Caffeine dipped Engineers!
      </p>
      </article>
      </div>
      <br/>
      <div className="right page">
        <img src={journeyFinale} className='journeyFinaleImg'></img>
      </div>
      <h2 className="t">hello</h2>
      <br/>
      <JourneyCarousel/>
        <br/>
      <div className="imageSection">
        <img src={lastToLeave} className="journeyBigImage"/>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum congue ex, sed mollis sem congue vitae. Mauris ornare, velit ut malesuada faucibus, sapien nulla elementum justo, feugiat dictum ex dui quis nulla.</h2>

        <img src={founderSelfie} className="journeyFounderSelfie" />
      </div>
    </>
  );
};

export default Journey;



function JourneyCarousel() {
  return (
    <Carousel
      withIndicators
      height={300}
      slideSize="33%"
      slideGap="20px"
      loop
      align="start"
      // breakpoints={[
      //   { maxWidth: 'md', slideSize: '50%' },
      //   { maxWidth: 'sm', slideSize: '100%', slideGap: 10 },
      // ]}
      className="journeyCarousel"
    >
      <Carousel.Slide style={{marginLeft:"70px"}}><img src={ktechNewOffice} className="bg"/></Carousel.Slide>
      <Carousel.Slide style={{alignItems:'center'}}><img src={dirtyTable} className="bg"/></Carousel.Slide>
      <Carousel.Slide style={{alignItems:'center'}}><img src={img2} className="bg"/></Carousel.Slide>
      <Carousel.Slide style={{alignItems:'center'}}><img src={newOffice} className="bg"/></Carousel.Slide>
      <Carousel.Slide style={{alignItems:'center'}}><img src={chassisTest} className="bg"/></Carousel.Slide>
      
      {/* ...other slides */}
    </Carousel>
  );
}































































































// useEffect( () => {
//     Aos.init({duration:2000});
//   },[]);

// return (
//     <>
//         <div class="page-header">Our Journey Till Now</div>
//         <div class="timeline">
//             <ul>
//                 <div  data-aos="fade-left" class="memory">

//                     <div class="memory-container">
//                     <div className='imageContainer'>
//                         {/* <img src={broom} alt="/" /> */}
//                     </div>
//                     <div className='textContainer'>
//                         <p class="memory-date" >1.   It started off as engineering project –– “The West has Vacuum cleaners for their carpeted floors but Us, Why are we still using Centuries old tech – Time we need an upgrade!”</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div data-aos="fade-right" class="memory">
//                     <div   class="memory-container">
//                         <div class="memory-date">2.	Just then TiEPitchfest was announced – We planned to participate and in record 45 days – We put together a working-prototype and business plan! </div>
//                     </div>
//                 </div>
//                 <div data-aos="fade-left" class="memory">
//                     <div class="memory-container">
//                         <div class="memory-date">3.	Cometh the PitchFest, Cometh the Zeal - we emerge in TOP 4 out of 48 startups across Karnataka, competing against funded start-ups – We were rightfully the Under-dogs! </div>

//                     </div>
//                 </div>
//                 <div data-aos="fade-right" class="memory">
//                     <div class="memory-container">
//                         <div class="memory-date">4.	Thanks to Ktech and TiE Mysuru, we got a sponsored incubation for 6 months at Ktech – We worked to perfect our business plan and designs and put together a completely in-house designed prototype to demonstrate our tech capability and competed at the Elevate Event!</div>

//                     </div>
//                 </div>
//                 <div data-aos="fade-left" class="memory">
//                      <div  class="memory-container">
//                         <div class="memory-date">5. But this journey of 6 months wasn’t easy, We did have our share of ups and down! </div>
//                     </div>
//                 </div>
//                 <div data-aos="fade-right" class="memory">
//                     <div   class="memory-container">
//                         <div class="memory-date">6.	We have since then showcased our work. This strengthened our resolute to solve the cleaning problems of India and come up with the best-in-class solutions! 	We are now at NIE and We are on constant lookout for Crazy-Caffeine dipped Engineers!   </div>
//                     </div>
//                 </div>
//             </ul>
//         </div>
//     </>
