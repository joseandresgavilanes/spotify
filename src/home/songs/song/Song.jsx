import React from "react";
import "./Song.scss";

const Song = ({ item }) => {
  return (
    <div className="card">
      <div className="img-holder">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg"
          alt=""
        />
      </div>
      <div className="text">
        <h2>Music to be...</h2>
        <p>Eminem</p>
      </div>
      <div className="play-icon">
        <div className="circle">
          <div className="triangle"></div>
        </div>
      </div>
    </div>
  );
};

export default Song;
