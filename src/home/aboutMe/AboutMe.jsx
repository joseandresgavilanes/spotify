import React, { useContext } from "react";
import UserDataContext from "../../context/useLocalStorage";
import "./AboutMe.scss";
import { NavLink } from "react-router-dom";

const AboutMe = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <NavLink to="/AboutMe">
      <div className="aboutme">
        <img
          className="rounded-circle"
          src={
            storedUser.foto
              ? `data:image/jpeg;base64,${storedUser.foto}`
              : "https://icon-library.com/images/profile-icon-white/profile-icon-white-1.jpg"
          }
          alt="User Photo"
        />
        <p>
          {storedUser.nombre + " "}
          {storedUser.apellido}
        </p>
      </div>
    </NavLink>
  );
};

export default AboutMe;
