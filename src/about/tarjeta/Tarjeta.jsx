import React,{ useState } from 'react'
import "./Tarjeta.scss";

const Tarjeta = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className={`flip-card ${isFlipped ? 'flip' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
          <div className='container'>
                  <div class="card-vinyl">
                <div class="card-image"><img src={props.foto}></img></div>
                <div class="card-content">
                    <h2 class="card-title">{props.nombre}</h2>
                    <p class="card-artist">{props.puesto}</p>
                    <div className='iconos'>
                        <div className='iconos_redes'>
                            <a href={props.linkG}><i class="fa-brands fa-github"></i></a>
                        </div>
                        <div className='iconos_redes'>
                            <a href={props.linkl}><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className='iconos_redes'>
                            <a href={props.linki}><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="vinyl-info">
                        <h1><span>Meet me</span></h1>
                    </div>
                </div>
            </div>
            </div>
          </div>
          <div className="flip-card-back">
            Back of card
          </div>
        </div>
      </div>
       
  )
}

export default Tarjeta