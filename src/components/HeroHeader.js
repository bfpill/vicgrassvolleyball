import React from "react";
import "./HeroHeader.css";

function HeroHeader() {
  return (
    <>
        <div key={Math.random()} className="hero-title glitch" data-text="Vic Grass Volleyball">
            Vic Grass Volleyball
        </div>
    </>
  );
}

export default HeroHeader;
