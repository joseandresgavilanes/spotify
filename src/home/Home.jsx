
import Songs from "./songs/Songs";
import "./Home.scss";
import React, {useContext} from "react";
import AboutMe from "./aboutMe/AboutMe";
import UserDataContext from "../context/useLocalStorage";

const Home = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.uname); // imprime 'John Doe'
  return (
    <div className="home">
      <AboutMe />
      <Songs />
    </div>
  );
};

export default Home;
