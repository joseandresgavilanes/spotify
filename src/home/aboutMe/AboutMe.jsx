import React, {useContext} from "react";
import UserDataContext from "../../context/useLocalStorage";
import "./AboutMe.scss";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  console.log(storedUser)
  return (
    <NavLink to="/AboutMe">
    <div className="aboutme">
      <i class="fa-solid fa-user"></i>
      <p>{storedUser.nombre+" "}{storedUser.apellido}</p>
    </div>
    </NavLink>
  );
};

export default AboutMe;
