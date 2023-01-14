import React from "react";
import Songs from "./songs/Songs";
import "./Home.scss";
import AboutMe from "./aboutMe/AboutMe";

const Home = () => {
  return (
    <div className="home">
      <AboutMe />
      <Songs />
    </div>
  );
};

export default Home;
