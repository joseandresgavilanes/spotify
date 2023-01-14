import React from "react";
import "./AboutMe.scss";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
  return (
    <NavLink to="/AboutMe">
    <div className="aboutme">
      <i class="fa-solid fa-user"></i>
      <p>jose andees</p>
    </div>
    </NavLink>
  );
};

export default AboutMe;
