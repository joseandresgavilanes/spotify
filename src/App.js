import React from "react";
import "./App.css";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Login from "./login/Login";
import Register from "./register/Register";
import Song from "./songDetails/Song";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Register />} />
          <Route path="/favorites" />
          <Route path="/upload-song" />

          <Route path="/songs" element={<Song />}>
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
