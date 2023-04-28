import React from "react";
import "./Home.css";

import { Analytics } from "@vercel/analytics/react";

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <h1>About</h1>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default Home;
