import React from "react";
import { NavLink } from "react-router-dom";
import "./Song.scss";

const Song = ({ item }) => {
  return (
    <NavLink to={`/songs/${item.key}`}>
      <div className="card">
        <div className="img-holder">
          <img src={item.images?.coverart} alt="" />
        </div>
        <div className="text">
          <h2>{item.title} </h2>
          <p>{item.subtitle}</p>
        </div>
        <NavLink to={`/home`}>
          <div className="play-icon">
            <div className="circle">
              <div className="triangle"></div>
            </div>
          </div>
        </NavLink>
      </div>
    </NavLink>
  );
};

export default Song;
