import React from "react";
import { songsData } from "./dummy";
import Song from "./song/Song";
import "./Songs.scss";
const Songs = () => {
  return (
    <div className="songs_main_container">
      <h2 className="songs_main_container_title">Good afternoon</h2>
      <ul className="songs_container">
        {songsData.map((item, index) => (
          <Song item={item} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Songs;
