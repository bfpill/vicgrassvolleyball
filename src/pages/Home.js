import React from "react";

import "./Home.css";

import { Analytics } from "@vercel/analytics/react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <HeroSection/>
          <InfoSection/>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default Home;
