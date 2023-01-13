import React from "react";
import "./LikedSongs.scss";

const LikedSongs = () => {
  return (
    <div className="liked">
      <div className="liked_container">
        <div className="liked_main">
          <div className="liked_main_img">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div className="liked_main_details">
            <p>PLAYLIST</p>
            <h2>Liked Songs</h2>
            <div className="liked_main_details_extras">
              <p>Eminem</p>
              <i class="fa-solid fa-circle"></i>
              <p>80 songs</p>
            </div>
          </div>
        </div>
        <div className="liked_songs">
          <div className="liked_songs_song">
            <div className="liked_songs_song_info">
              <div className="liked_songs_song_info_number">1</div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg"
                alt=""
              />
              <div className="liked_songs_song_info_content">
                <h2>Slim Shady</h2>
                <p>Eminem</p>
              </div>

              <div className="liked_songs_song_info_album">The Eminem Show</div>

              <div className="liked_songs_song_info_extras">
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
                <p>4:21</p>
              </div>
            </div>
          </div>

          <div className="liked_songs_song">
            <div className="liked_songs_song_info">
              <div className="liked_songs_song_info_number">2</div>
              <img
                src="https://media.npr.org/assets/img/2018/08/31/eminem-kamikaze_sq-82730dd582854d85ccfd2cfd46e248ac52aa11ee-s1100-c50.jpg"
                alt=""
              />
              <div className="liked_songs_song_info_content">
                <h2>Kamikaze</h2>
                <p>Eminem</p>
              </div>

              <div className="liked_songs_song_info_album">Kamikaze</div>

              <div className="liked_songs_song_info_extras">
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
                <p>4:21</p>
              </div>
            </div>
          </div>

          <div className="liked_songs_song">
            <div className="liked_songs_song_info">
              <div className="liked_songs_song_info_number">3</div>
              <img
                src="https://miro.medium.com/max/690/1*9uHPMdcUmmjITcx6NaYAiQ.jpeg"
                alt=""
              />
              <div className="liked_songs_song_info_content">
                <h2>Higher</h2>
                <p>Eminem</p>
              </div>

              <div className="liked_songs_song_info_album">
                Music to be murdered by
              </div>

              <div className="liked_songs_song_info_extras">
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
                <p>4:21</p>
              </div>
            </div>
          </div>

          <div className="liked_songs_song">
            <div className="liked_songs_song_info">
              <div className="liked_songs_song_info_number">4</div>
              <img
                src="https://miro.medium.com/max/690/1*9uHPMdcUmmjITcx6NaYAiQ.jpeg"
                alt=""
              />
              <div className="liked_songs_song_info_content">
                <h2>Killer</h2>
                <p>Eminem</p>
              </div>

              <div className="liked_songs_song_info_album">
                Music to be murdered by
              </div>

              <div className="liked_songs_song_info_extras">
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
                <p>4:21</p>
              </div>
            </div>
          </div>

          <div className="liked_songs_song">
            <div className="liked_songs_song_info">
              <div className="liked_songs_song_info_number">5</div>
              <img
                src="https://miro.medium.com/max/690/1*9uHPMdcUmmjITcx6NaYAiQ.jpeg"
                alt=""
              />
              <div className="liked_songs_song_info_content">
                <h2>Too Deep</h2>
                <p>Eminem</p>
              </div>

              <div className="liked_songs_song_info_album">
                Music to be murdered by
              </div>

              <div className="liked_songs_song_info_extras">
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
                <p>4:21</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedSongs;
