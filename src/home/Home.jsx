import Songs from "./songs/Songs";
import "./Home.scss";
import React, { useContext } from "react";
import AboutMe from "./aboutMe/AboutMe";
import UserDataContext from "../context/useLocalStorage";

const Home = () => {
  return (
    <div className="home">
      <AboutMe />
      <Songs />
    </div>
  );
};

export default Home;
