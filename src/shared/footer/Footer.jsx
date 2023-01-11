import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_song">
        <div className="footer_song_img">
          <img
            src="https://i.scdn.co/image/ab67616d0000b273b84b0516d901f95461bb5165"
            alt=""
          />
        </div>
        <div className="footer_song_details">
          <h2 className="footer_song_details_title">Higher</h2>
          <p className="footer_song_details_text">Eminem</p>
        </div>
        <div className="footer_song_extras">
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 hDgDGI"
          >
            <path
              d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"
              fill="currentColor"
            ></path>
          </svg>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor" fill-rule="evenodd">
              <path
                d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                fill-rule="nonzero"
              ></path>
              <path d="M10 8h4v3h-4z" fill="currentColor"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="footer_controls">
        <div className="footer_controls_btns">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path
              d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"
              fill="currentColor"
            ></path>
            <path
              d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 hDgDGI"
          >
            <path
              d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            className="footer_controls_btns_play"
            role="img"
            height="20"
            width="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"
              fill="black"
            ></path>
          </svg>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 hDgDGI"
          >
            <path
              d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"
              fill="currentColor"
            ></path>
          </svg>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            class="Svg-sc-1bi12j5-0 hDgDGI"
          >
            <path
              d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="footer_controls_selector">
          <p>00:00</p>
          <input type="range" />
          <p>00:00</p>
        </div>
      </div>
      <div className="footer_extras">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path
            d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"
            fill="currentColor"
          ></path>
        </svg>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path
            d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"
            fill="currentColor"
          ></path>
        </svg>
        <svg
          role="img"
          height="16"
          width="16"
          aria-label="Bir cihaza bağlan"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"
            fill="currentColor"
          ></path>
          <path
            d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="footer_extras_range">
          <svg
            role="presentation"
            height="16"
            width="16"
            aria-label="Ses seviyesi yüksek"
            id="volume-icon"
            viewBox="0 0 16 16"
          >
            <path
              d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"
              fill="currentColor"
            ></path>
            <path
              d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"
              fill="currentColor"
            ></path>
          </svg>
          <input type="range" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
