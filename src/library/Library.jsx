import React from "react";
import { NavLink } from "react-router-dom";
import "./Library.scss";
import SongsUser from "./songsUser/SongsUser";

const Library = () => {
  return (
    <div className="library">
      <div className="library_container">
        <h2 className="library_container_title">Your Songs</h2>
        <div className="library_container_info">
          <NavLink to="/favorites">
            <div className="library_container_info_favorites">
              <div className="library_container_info_favorites_content">
                <h2>Liked Songs</h2>
                <p>20 liked songs</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/createSong">
          <div className="library_container_info_add">
            <div className="card">
              <div className="img-holder">
                <img src="./images/add.png" alt="" />
              </div>
              <div className="text">
                <h2>Create Song</h2>
                <p>Your turn!</p>
              </div>
              <div className="play-icon"></div>
            </div>
          </div>
          </NavLink>
          <NavLink to="/editsong">
          <div className="library_container_info_add">
            <div className="card">
              <div className="img-holder">
                <img src="./images/editar.png" alt="" />
              </div>
              <div className="text">
                <h2>Edit Song</h2>
                <p>problems?</p>
              </div>
              <div className="play-icon"></div>
            </div>
          </div>
          </NavLink>
          <NavLink to="/deletesong">
          <div className="library_container_info_add">
            <div className="card">
              <div className="img-holder">
                <img src="./images/delete.png" alt="" />
              </div>
              <div className="text">
                <h2>Delete Song</h2>
                <p>Delete your song</p>
              </div>
              <div className="play-icon"></div>
            </div>
          </div>
          </NavLink>
          <SongsUser/>
        </div>
      </div>
    </div>
  );
};

export default Library;
