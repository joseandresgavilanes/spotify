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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" />
        <Route path="/upload-song" />

        <Route path="/songs" element={<Song />}>
          <Route path=":id" />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
