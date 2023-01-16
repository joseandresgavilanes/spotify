import React from "react";
import { NavLink } from "react-router-dom";
import "../../home/songs/song/Song.scss";
import { Buffer } from 'buffer';

const CancionUsuario = (props) => {

  const handlePlayClick = () => {
    const songData = Buffer.from((props.user.musica),'base64');
    // Crear un objeto Blob para representar el audio
    const songBlob = new Blob([songData], { type: 'audio/mp3' });
    const songUrl = URL.createObjectURL(songBlob);
    // Crear una nueva instancia de Audio con la URL
    const audioPlayer = new Audio(songUrl);
    audioPlayer.play();
    audioPlayer.onended = () => {
      URL.revokeObjectURL(songUrl);
  }
  }
    return (
<NavLink to={`/songsDetails/${props.user.titulo}`}>
          <div className="card">
            <div className="img-holder">
              <img src={`${props.user.carilla}`} alt="" />
            </div>
            <div className="text">
              <h2>{props.user.titulo} </h2>
              <p>{props.user.nombre}</p>
            </div>
            <NavLink to={`/library`}>
              <div className="play-icon"  onClick={handlePlayClick}>
                <div className="circle">
                  <div className="triangle"></div>
                </div>
          </div>
        </NavLink>
      </div>
    </NavLink>
  );
};

export default CancionUsuario;
