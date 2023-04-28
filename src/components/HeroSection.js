import React from 'react';
import './HeroSection.css';
import myVideo from "../videos/hero-video-1.MP4"

function HeroSection() {
  return (
    <div className="hero-section">
      <video className="video" autoPlay loop muted>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        {/* your hero content goes here */}
      </div>
    </div>
  );
}

export default HeroSection;
