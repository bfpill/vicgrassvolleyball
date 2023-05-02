import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import './HeroSection.css';
import myHero from "../images/hero1.jpg"
import HeroHeader from "./HeroHeader";

const HeroSection = () => {

  return (
    <div className="hero-section">
        <div className="video-container">
        <video className="video" autoPlay muted loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/vicgrassvolleyball-90a74.appspot.com/o/tmpMovie%202.MP4?alt=media&token=80873e40-ae58-4ed6-904c-6e4a3a6fc648" type="video/mp4" />
          <img src={myHero} className='hero-image'/>
        </video>
        </div>
        <HeroHeader/>
        <div className="hero-content">
        </div>
    </div>
  );
}

export default HeroSection;