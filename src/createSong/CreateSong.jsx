import React, { useState } from 'react';
import axios from 'axios';
import './CreateSong.scss'

const CreateSong = () => {

    const [songTitle, setSongTitle] = useState('');
    const [songLyrics, setSongLyrics] = useState('');
    const [songYear, setSongYear] = useState('');
    const [songCover, setSongCover] = useState(null);
    const [songTrack, setSongTrack] = useState(null);
    const [songAuthor, setSongAuthor] = useState('');
    const [songId, setSongId] = useState('');

    const currentYear = new Date();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    function validateForm(data) {
        if (!data.songTitle || !data.songYear || !data.songCover || !data.songTrack || !data.songAuthor || !data.songId) {
          return false;
        }
        return true;
      }
      
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = {songTitle,songLyrics,songYear,songCover,songTrack,songAuthor,songId};
      if(!validateForm(formData)){
        console.log("Por favor completa todos los campos obligatorios");
        return;
      }
      try {
        const data = new FormData();
        data.append('id', songTitle);
        data.append('letra',songLyrics);
        data.append('anio',currentYear);
        data.append('carilla',songCover);
        data.append('musica',songTrack);
        data.append('nombre',storedUser.nombre);
        data.append('idDueño',storedUser.id);
        await axios.post('[URL de tu API]', data);
        //Reset form
        setSongTitle('');
        setSongLyrics('');
        setSongYear('');
        setSongCover(null);
        setSongTrack(null);
        setSongAuthor('');
        setSongId('');
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
        <div className="song-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <p className='titulo_creacion_cancion'>Título de la canción:</p>
              <input
                type="text"
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
                required
                className="form-control_titulo"
              />
            </label>
          </div>

          <div className="form-group">
            <label>
              Carátula:
              <input
                type="file"
                onChange={(e) => setSongCover(e.target.files[0])}
                accept="image/*"
                required
                className="form-control-file"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Pista de sonido:
              <input
                type="file"
                onChange={(e) => setSongTrack(e.target.files[0])}
                accept="audio/*"
                required
                className="form-control-file"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Letra de la canción:
              <textarea
                value={songLyrics}
                onChange={(e) => setSongLyrics(e.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <input type="submit" value="Enviar" className="btn btn-primary" />
          </div>
        </form>
      </div>
  );

}

export default CreateSong