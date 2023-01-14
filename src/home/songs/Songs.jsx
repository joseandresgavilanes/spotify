import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGetTopChartsQuery } from "../../redux/services/shazamCore";
import { songsData } from "./dummy";
import Song from "./song/Song";
import "./Songs.scss";
const Songs = () => {
  const { data } = useGetTopChartsQuery();

  return (
    <div className="songs_main_container">
      <h2 className="songs_main_container_title">Good afternoon</h2>
      <ul className="songs_container">
        {data?.map((item) => (
          <Song item={item} key={item.key} />
        ))}
      </ul>
    </div>
  );
};

export default Songs;
