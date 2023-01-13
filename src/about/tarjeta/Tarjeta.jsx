import React,{ useState, useEffect } from 'react'
import "./Tarjeta.scss";

const Tarjeta = (props) => {
    const [entrando, setEntrando] = useState(false);

    useEffect(() => {
      setEntrando(true);
    }, []);
  
    const imgUrl = props.foto;
    return (

        <div className={`mi-componente ${entrando ? 'mi-componente-entrando' : ''}`}>
            <div className="card-vinyl">
                <div className='card_image_container'>
                <div className="card-image" ><img className='fotos_about' src={imgUrl} alt='Foto de los autores'/></div>
                </div>
                <div className="card-content">
                    <h2 className="card-title">{props.nombre}</h2>
                    <p className="card-artist">{props.puesto}</p>
                    <div className='iconos'>
                        <div className='iconos_redes'>
                            <a href={props.linkG} Target="_blank"><i className="fa-brands fa-github"></i></a>
                        </div>
                        <div className='iconos_redes'>
                            <a href={props.linkl} Target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className='iconos_redes'>
                            <a href={props.linki} Target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="vinyl-info">
                        <h1><span>Meet me</span></h1>
                    </div>
                </div>
                <div className='espacio'>
                <div className='info'>
                    <p className='texto'>{props.detalle}</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta