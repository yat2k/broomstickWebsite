import React from "react";
import "./mainpage.css";

import back_updated from "../assets/back_updated.png";

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
        <div className="mainpageDiv">
        <img src={back_updated} class="mainpageImage"></img>
        </div>
      </div>
    </>
  );
};

export default Mainpage;
