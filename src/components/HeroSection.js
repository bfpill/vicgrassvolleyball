import React, { useRef, useEffect, useState } from 'react';
import './HeroSection.css';
import myVideo from "../videos/hero-video-1.MP4"
import myHero from "../images/hero1.jpg"
import HeroHeader from "./HeroHeader.js"
const HeroSection = () => {
    const [animate, setAnimate] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        const handleVideoEnded = () => {
            setAnimate(true);
            video.play();
        };

        video.addEventListener('ended', handleVideoEnded);
    }, []);

    useEffect(() => {

    }, [setAnimate]);

  return (
    <div className="hero-section">
        <video ref={videoRef} className="video" autoPlay muted >
            <source src={myVideo} type="video/mp4" />
            <img src={myHero} className='hero-image'/>
        </video>
        <HeroHeader/>
        <div className="hero-content">
        </div>
    </div>
  );
}

export default HeroSection;
