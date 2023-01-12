import React from 'react'
import "./Tarjeta.scss";

const Tarjeta = (props) => {
  return (
    <div className='container'>
    <div class="card-vinyl">
      <div class="card-image"><img src={props.foto}></img></div>
      <div class="card-content">
        <h2 class="card-title">{props.nombre}</h2>
        <p class="card-artist">{props.puesto}</p>
      </div>
      <div class="card-footer">
        <div class="vinyl-info">
            <h2><span>Meet me</span></h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Tarjeta