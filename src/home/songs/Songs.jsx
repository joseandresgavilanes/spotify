import React from "react";
import { songsData } from "./dummy";
import Song from "./song/Song";
import "./Songs.scss";
const Songs = () => {
  return (
    <ul className="songs_container">
      {songsData.map((item, index) => (
        <Song item={item} key={index} />
      ))}
    </ul>
  );
};

export default Songs;
