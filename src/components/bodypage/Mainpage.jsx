import React from "react";
import "./mainpage.css";

import landingPageBroomstick from "../assets/landingPageBroomstick.png";

// import img4 from '../assets/img4.jpg'
// import img5 from '../assets/img5.jpg'

const Mainpage = () => {
  

  return (
    <>
      <div>
        <h2 className="mainpageHeading">
          The Future of
          <br />
          Cleaning Technology
        </h2>
        <div style={{alignItems:"center"}}>
        <img src={landingPageBroomstick} className="mainpageImg"></img>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
