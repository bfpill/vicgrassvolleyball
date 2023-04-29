import React from "react";
import teamShot1 from "../images/teamShot1.JPG";
import teamShot2 from "../images/teamShot2.JPG";
import { InstagramEmbed } from 'react-social-media-embed';
import "./InfoSection.css";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSceX01rfyydjtwKSMEcpp_vKb7Mchkm_Am5LJ22giYgCJyCkg/viewform?usp=sf_link"; 
const handleSignUpClick = () => {
    window.open(formUrl, "_blank");
};

function InfoSection() {
    return (
        <>
            <div className="info-wrapper" data-text="Info Section">
                <img src={teamShot1} className="info-photo-left" />
                <div className="info-text-container">
                    <div className="info-title">The Home of Grass</div>
                    <div className="info-second-title">Volleyball in Victoria</div>
                    <div className="info-subheading">
                        <ul>
                            <li className="bullet-point">
                                Weekly tournaments all summer long
                            </li>
                            <li className="bullet-point">Big cash prizes</li>
                            <li className="bullet-point">
                                Australia wide player ranking system
                            </li>
                            <li className="bullet-point">All tournaments hosted at Princes Park</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="info-wrapper" data-text="Info Section">
                <img src={teamShot2} className="info-photo-right" />
                <div className="info-text-container">
                    <div className="info-third-title">Sign ups for May 7th</div>
                    <div className="info-fourth-title">Open now!</div>
                    <div className="info-subheading">
                        <ul>
                            <li className="bullet-point">
                               Tournament format is triples (3v3)
                            </li>
                            <li className="bullet-point">
                               %50 of pool goes to cash prize
                            </li>
                            <li className="bullet-point">
                                Top two teams per pool advance to finals
                            </li>
                            <li className="bullet-point">
                                9:30 am first serve at Princes Park
                            </li>
                        </ul>
                        <div>
                            <button onClick = {handleSignUpClick} className="textlink" >CLICK TO SIGN UP FOR MAY 7TH GRASS TRIPLES</button> 
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick = {handleSignUpClick} className="textlink-bottom" >CLICK TO SIGN UP FOR MAY 7TH GRASS TRIPLES</button> 
            </div>
        </>
    );
}

export default InfoSection;