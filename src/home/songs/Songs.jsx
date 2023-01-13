import React from "react";
import { songsData } from "./dummy";
import Song from "./song/Song";
import "./Songs.scss";
import { genres } from "../../assets/Constants";
import {useGetTopChartsQuery } from "../../redux/services/ShazamCore";

const Songs = () => {
  const {data, isFetching, error} = useGetTopChartsQuery();
  console.log(genres);
  const genreTitle = 'pop';
  console.log(data)

  return (
    <div> 
    <div>
    <h2>Discovery</h2>
    <select 
    onChange={() => {}}
    name="" id="" value="">
    
    {genres.map((genre) => <option key={genre.value} value={genre.value} >{genre.title}</option>)}
    </select></div>
    <div className="songs_main_container">
      <h2 className="songs_main_container_title">Good afternoon</h2>
      <ul className="songs_container">
        {songsData.map((item, index) => (
          <Song item={item} key={index} />
        ))}
      </ul>
    </div>
  </div>
  );
};

export default Songs;
