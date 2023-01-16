import React from 'react'
import { NavLink } from 'react-router-dom';
import '../../home/songs/song/Song.scss';

const CancionUsuario = (props) => {
    console.log(props.user)

    const handlePlayClick = () => {
      const songUrl = props.user.cancion;
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
            <NavLink to={`/home`}>
              <div className="play-icon"  onClick={handlePlayClick}>
                <div className="circle">
                  <div className="triangle"></div>
                </div>
              </div>
              </NavLink>
          </div>
          </NavLink>
      );
}

export default CancionUsuario