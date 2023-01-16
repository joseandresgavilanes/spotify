import React from "react";
import { NavLink } from "react-router-dom";
import "../../home/songs/song/Song.scss";

const CancionUsuario = (props) => {
  console.log(props.user);

  localStorage.setItem("cancion", JSON.stringify(props.user.id));

  return (
    <NavLink to={`/songsDetails/${props.user.id}`}>
      <div className="card">
        <div className="img-holder">
          <img src={`${props.user.carilla}`} alt="" />
        </div>
        <div className="text">
          <h2>{props.user.titulo} </h2>
          <p>{props.user.nombre}</p>
        </div>
        <NavLink to={`/library`}>
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

export default CancionUsuario;
