import React from "react";
import { NavLink } from "react-router-dom";
import "../../home/songs/song/Song.scss";

const CancionUsuario = (props) => {
  console.log(props.user);

    return (
<NavLink to={`/songsDetails/${props.user.titulo}`}>
{localStorage.setItem('cancion',JSON.stringify(props.user.titulo))}
          <div className="card">
            <div className="img-holder">
              <img src={`${props.user.carilla}`} alt="" />
            </div>
          </div>
        </NavLink>
      </div>
    </NavLink>
  );
};

export default CancionUsuario;
