import React from 'react';
import './Experience.css';
import Elevate from '../../components/assets/Elevate.png';
import Ktech from '../assets/Ktech.png';
import TieMysuru from '../assets/TiE Mysuru.jpg';
import NieUniversity from '../assets/NIE_University_logo.svg.png';
import MathWorks from '../assets/logo_mathworks-1024x512.png';
import SFAL from '../assets/SFAL.webp';
import SKarnataka from '../assets/start-up karnataka.png'


const Photos = [
    { website: 'Visit Website' },
    { website: 'Visit Website' },
    { website: 'Visit Website' },
    { website: 'Visit Website' },
    { website: 'Visit Website' },
    { website: 'Visit Website' },
    { website: 'Visit Website' },
]

const Experience = () => {
    return (
        <>
            <div className="Experience">
                <div className="Exp-heading">
                    <span>We are Associated with</span>
                </div>
                <div className="cards-container">
                <div class="slide-content">
                {/* <div className="row justify-content-center"> */}
                    <div class="card ">
                        <div class="logo">
                            <img src={Elevate} />
                        </div>
                        <div class="package">
                            <div><a href="">Visit Website</a></div>
                        </div>
                    </div>
                    
                    <div class="card ">
                        <div class="logo">
                            <img src={SKarnataka} />
                        </div>
                        <div class="package">
                            <div><a href="">Visit Website</a></div>
                        </div>
                    </div>
                
                    
                    <div class="card ">
                        <div class="logo">
                            <img src={NieUniversity} />
                        </div>
                        <div class="package">
                            <div><a href="">Visit Website</a></div>
                        </div>
                    </div>
                   
                    <div class="card ">
                        <div class="logo">
                            <img src={TieMysuru} />
                        </div>
                        <div class="package">
                            <div><a href="">Visit Website</a></div>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="row justify-content-center"> */}

                    <div class="card ">
                        <div class="logo">
                            <img src={MathWorks} />
                        </div>
                        <div class="package">
                            <div><a href="">Visit Website</a></div>
                        </div>
                    </div>


                    <div class="card ">
                        <div class="logo">
                            <img src={Ktech} />
                        </div>
                        <div class="package">
                            <div><a href="">Visit Website</a></div>
                        </div>
                    </div>


                    <div class="card ">
                        <div class="logo">
                            <img src={SFAL} />
                        </div>
                        <div class="package">
                            <div><a href="">Visit Website</a></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Experience