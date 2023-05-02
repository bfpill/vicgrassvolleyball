import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import './HeroSection.css';
import myHero from "../images/hero1.png"
import HeroHeader from "./HeroHeader";

const HeroSection = () => {

  return (
    <div className="hero-section">
        <div className="video-container">
          <img src={myHero} className='video'/>
        </div>
        <HeroHeader/>
        <div className="hero-content">
        </div>
    </div>
  );
}

export default HeroSection;