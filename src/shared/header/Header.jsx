import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <NavLink className="header_logo" to="/">
          <img
            className="header_logo-img"
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt=""
          />
        </NavLink>
        <div className="header_links">
          <NavLink className="header_links_item" to="/">
            <svg
              role="img"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"
                fill="currentColor"
              ></path>
            </svg>
            Home
          </NavLink>
          <NavLink className="header_links_item" to="/search">
            <svg
              role="img"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"
                fill="currentColor"
              ></path>
            </svg>
            Search
          </NavLink>
          <NavLink className="header_links_item" to="/">
            <svg
              role="img"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"
                fill="currentColor"
              ></path>
            </svg>
            Your library
          </NavLink>
        </div>

        <div className="header_extras">
          <NavLink className="header_links_item" to="/">
            <div className="header_links_item_img">
              <svg
                role="img"
                height="12"
                width="12"
                aria-hidden="true"
                viewBox="0 0 16 16"
                class="Svg-sc-1bi12j5-0 hDgDGI"
              >
                <path
                  d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"
                  fill="black"
                ></path>
              </svg>
            </div>
            Create a playlist
          </NavLink>
          <NavLink className="header_links_item" to="/favorites">
            <div className="header_links_item_img_2">
              <svg
                role="img"
                height="12"
                width="12"
                aria-hidden="true"
                viewBox="0 0 16 16"
                class="Svg-sc-1bi12j5-0 hDgDGI"
              >
                <path
                  d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
                  fill="white"
                ></path>
              </svg>
            </div>
            Your Favorites
          </NavLink>
          <div className="header_playlist">
            <NavLink className="header_playlist_item" to="/">
              <i class="fa-solid fa-user"></i>
              About us
            </NavLink>
          </div>
        </div>

        <div className="header_playlist">
          <div className="header_line"></div>
          <NavLink className="header_links_item" to="/">
            My Playlist #1
          </NavLink>
          <NavLink className="header_links_item" to="/">
            My Playlist #2
          </NavLink>
          <NavLink className="header_links_item" to="/">
            My Playlist #3
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
