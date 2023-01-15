import React,{useState, useEffect} from "react";
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
import AboutMeContent from "./AboutMeContent/AboutMeContent";
import SearchView from "./search/SearchView";
import CreateSong from "./createSong/CreateSong";
import SongDetailsUsu from "./library/detailsUser/SongDetailsUsu";



function App() {
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/register"
    ) {
      setIsHidden(true);
    }
  });
  return (

    <div className="App">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
      <div className={`Nav ${isHidden ? "hidden" : ""}`}>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:searchTerm" element={<SearchView />} />
          <Route path="/library" element={<Library />} />
          <Route path="/favorites" element={<LikedSongs />} />
          <Route path="/upload-song" />
          <Route path="/createSong" element={<CreateSong/>}/>
          <Route path="/AboutMe" element={<AboutMeContent />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/songs/:songid" element={<SongDetails />} />
          <Route path="/songsDetails" element={<SongDetailsUsu/>}/>
        </Routes>
      </div>
      <div className={`Footer_Container ${isHidden ? 'hidden' : ''}`}>
      <Footer />
    </div>
    </div>
  );
}

export default App;
