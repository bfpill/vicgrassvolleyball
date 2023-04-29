import React from "react";
import teamShot1 from "../images/teamShot1.JPG"
import "./InfoSection.css";

function InfoSection() {
  return (
    <>
        <div className="info-wrapper" data-text="Info Section">
            <img src={teamShot1} className="info-photo"/>
        </div>
    </>
  );
}

export default InfoSection;
