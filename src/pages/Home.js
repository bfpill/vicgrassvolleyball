import React from "react";

import "./Home.css";

import { Analytics } from "@vercel/analytics/react";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <HeroSection/>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default Home;
