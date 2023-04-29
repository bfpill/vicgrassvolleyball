import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

import './HeroSection.css';
import myVideo from "../videos/hero-video-1.MP4"
import myHero from "../images/hero1.jpg"
import HeroHeader from "./HeroHeader";

const HeroSection = () => {

  return (
    <div className="hero-section">
        <div className="video-container">
        <video className="video" autoPlay muted loop>
            <source src={myVideo} type="video/mp4" />
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
