import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebaseConfig";
import "./Register.css";
function Register() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null)
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [experience, setExperience] = useState("unselected");

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
      setFirstName(value);
    }
    if(id === "lastName"){
      setLastName(value);
    }
    if(id === "email"){
      setEmail(value);
    }
    if(id === "password"){
      setPassword(value);
    }
    if(id === "gender"){
      setGender(value);
    }
    if(id === "age"){
      setAge(value);
    }
    if(id === "experience"){
      setExperience(value);
    }
  }
  
  const register = () => {
    if (!firstName) alert("Please enter a first name");
    else if (!lastName) alert("Please enter a last name");
    else if (!email) alert("Please enter an email");
    else if (!gender) alert("Please enter Gender");
    else if (!age) alert("Please enter Age");
    else if (!password) alert("Please enter a Password");
    else if (experience === "unselected") alert("Please select an experience level");
    
    else{
      setUser(registerWithEmailAndPassword(firstName, lastName, email, password, gender, age, experience));
      setLoading(true);
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
          value={firstName}
          onChange={(e) => handleInputChange(e)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={lastName}
          onChange={(e) => handleInputChange(e)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => handleInputChange(e)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => handleInputChange(e)}
          placeholder="Password"
        />
        <input
          type="text"
          className="register__textBox"
          value={gender}
          onChange={(e) => handleInputChange(e)}
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
              onChange={(e) => handleInputChange(e)}
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
              onChange={(e) => handleExperienceChange(e)}
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
              onChange={(e) => handleExperienceChange(e)}
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
              onChange={(e) => handleExperienceChange(e)}
            />
            <span className="experience__circle"></span>
            <span className="experience__text">Expert</span>
          </label>
        </div>
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? <Link to="/Login">Login</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Register;
