import React,{useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import Loader from '../../loader/Loader';
import './SongDetailsUsu.scss'

const SongDetailsUsu = () => {
  const { titulo } = useParams();
  console.log(titulo)
  const [musicdb, setMusicdb] = useState(null);
  const [loading, setLoading] = useState(true);
  const storedSong = JSON.parse(localStorage.getItem("cancion"));

  useEffect(() => {
    setLoading(true);
    axios.get(`https://loggin-api-production.up.railway.app/titulo/${titulo}`)
    .then(response => {
      console.log("Llamaste al api")
      setMusicdb(response.data)
      setLoading(false);
      console.log(response.data)
    })
    .catch(error => {
      console.log("algo anda mal")
      setLoading(false);
    });
  }, [titulo])
  
  if (loading) {
    return <Loader />
  }
    return (
        <div className="song_details">
        <div className="song_details_container">
          <div className="song_details_main">
            <div className="song_details_main_img">
              <img src={musicdb[0].carilla} alt="" />
            </div>
            <div className="song_details_main_details">
              <p>SONG</p>
              <h2>{musicdb[0].titulo} </h2>
              <div className="song_details_main_details_extras">
                <img src={musicdb[0].carilla} alt="" />
                <p>{musicdb[0].nombre}</p>
                <i class="fa-solid fa-circle"></i>
                <p>2020</p>
                <i class="fa-solid fa-circle"></i>
                <p>3:15</p>
              </div>
            </div>
          </div>
          <div className="song_details_lyrics">
            <div className="song_details_lyrics_controls">
              <svg
                className="footer_controls_btns_play song_details_lyrics_controls_play"
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
                className="song_details_lyrics_controls_like"
                role="img"
                height="16"
                width="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"
                  fill="currentColor"
                ></path>
              </svg>
              <i class="fa-solid fa-ellipsis"></i>
            </div>
            <div className="song_details_lyrics_main">
              <h2>Lyrics</h2>
              <div className="song_details_lyrics_main_text">
                {musicdb[0].letra}
              </div>
            </div>
            <div className="song_details_artist">
              <img src={musicdb[0].carilla} alt="" />
              <div className="song_details_artist_main">
                <p>ARTIST</p>
                <h2>{musicdb[0].nombre}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SongDetailsUsu