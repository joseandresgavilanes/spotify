import React from "react";
import "./App.css";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Login from "./login/Login";
import Register from "./register/Register";
import SongDetails from "./songDetails/SongDetails";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Search from "./search/Search";
import About from "./about/About";
import Contact from "./contact/Contact";
import LikedSongs from "./likedSongs/LikedSongs";
import Library from "./library/Library";
import AboutMe from "./home/aboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/favorites" element={<LikedSongs />} />
          <Route path="/upload-song" />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/songs" element={<SongDetails />}>
            <Route path=":id" />
          </Route>
        </Routes>
      </div>
      <div className="Footer_Container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
