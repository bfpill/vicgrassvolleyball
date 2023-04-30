import './AdditionalInformation.css';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  addAdditionalInformation
} from "../firebaseConfig";
import "./Register.css";

function AdditionalInformation() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("unselected");

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const submitAdditionalInfo = () => {
    if (!gender) alert("Please enter Gender");
    else if (!age) alert("Please enter Age");
    else if (experience === "unselected") alert("Please select an experience level");

    else{
        user = addAdditionalInformation(gender, age, experience);
        loading = true;
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="register">
      <div className="register__container">
        <div className="registerTitle">Create a Vic Grass Player Account:</div>
        <input
          type="text"
          className="register__textBox"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
        />
        <input
          type="text"
          className="register__textBox"
          value={age}
          pattern="[0-9]*"
          maxLength="2"
          onChange={(e) => {
            const charCode = e.which ? e.which : e.keyCode;
            if (charCode < 48 || charCode > 57) {
              e.preventDefault();
            }
            setAge(e.target.value);
          }}
          placeholder="Age"
        />
        <div className="register__skill__textbox">
          {" "}
          Select your skill level:
        </div>
        <div className="experience__options">
          <label className="experience__option">
            <input
              type="radio"
              name="experience"
              value="beginner"
              checked={experience === "beginner"}
              onChange={handleExperienceChange}
            />
            <span className="experience__circle"></span>
            <span className="experience__text">Beginner</span>
          </label>
          <label className="experience__option">
            <input
              type="radio"
              name="experience"
              value="intermediate"
              checked={experience === "intermediate"}
              onChange={handleExperienceChange}
            />
            <span className="experience__circle"></span>
            <span className="experience__text">Intermediate</span>
          </label>
          <label className="experience__option">
            <input
              type="radio"
              name="experience"
              value="advanced"
              checked={experience === "advanced"}
              onChange={handleExperienceChange}
            />
            <span className="experience__circle"></span>
            <span className="experience__text">Advanced</span>
          </label>
          <label className="experience__option">
            <input
              type="radio"
              name="experience"
              value="expert"
              checked={experience === "expert"}
              onChange={handleExperienceChange}
            />
            <span className="experience__circle"></span>
            <span className="experience__text">Expert</span>
          </label>
        </div>
        <button className="register__btn" onClick={submitAdditionalInfo}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default AdditionalInformation;
