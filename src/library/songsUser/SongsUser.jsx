import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Loader from '../../loader/Loader';
import Song from '../../home/songs/song/Song';
import './SongUser.scss'
import CancionUsuario from '../canciones/CancionUsuario';

const SongsUser = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
          .get(`https://loggin-api-production.up.railway.app/nombre/${storedUser.nombre}`)
          .then(response => {
            setData(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
            setLoading(false);
          });
      }, []);

      if(loading){
        return <Loader/>
      }
  return (
    <div className="songs_main_container">
    <ul className="songs_container">
      {data?.map( item =>{
        return <CancionUsuario user={item}  />
     })}
    </ul>
  </div>
  )
}

export default SongsUser