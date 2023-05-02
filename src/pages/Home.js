import React from "react";

import "./Home.css";

import { Analytics } from "@vercel/analytics/react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import PlayerRankings from "../components/PlayerRankings";

import VicGrassLogo from "../images/VicGrassLogoGrainy.png"

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <HeroSection/>
          <InfoSection/>
          <div className="player-rankings-div">
            <div className="rankings-wrapper">
              <img className="logo-image" src={VicGrassLogo}/>
              <PlayerRankings thin={false}/>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default Home;
