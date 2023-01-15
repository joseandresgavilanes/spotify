import React, { useState } from 'react';
import axios from 'axios';

const CreateSong = () => {

    const [songTitle, setSongTitle] = useState('');
    const [songLyrics, setSongLyrics] = useState('');
    const [songYear, setSongYear] = useState('');
    const [songCover, setSongCover] = useState(null);
    const [songTrack, setSongTrack] = useState(null);
    const [songAuthor, setSongAuthor] = useState('');
    const [songId, setSongId] = useState('');

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
        data.append('songTitle', songTitle);
        data.append('songLyrics',songLyrics);
        data.append('songYear',songYear);
        data.append('songCover',songCover);
        data.append('songTrack',songTrack);
        data.append('songAuthor',songAuthor);
        data.append('songId',songId);
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
      <form onSubmit={handleSubmit}>
        <label>
          Título de la canción:
          <input
            type="text"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Letra de la canción:
          <textarea
            value={songLyrics}
            onChange={(e) => setSongLyrics(e.target.value)}
          />
        </label>
        <br />
        <label>
          Año:
          <input
            type="number"
            value={songYear}
            onChange={(e) => setSongYear(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Carátula:
          <input
            type="file"
            onChange={(e) => setSongCover(e.target.files[0])}
            accept="image/*"
            required
          />
        </label>
        <br />
        <label>
          Pista de sonido:
          <input
            type="file"
            onChange={(e) => setSongTrack(e.target.files[0])}
            accept="audio/*"
            required
          />
                </label>
      <br />
      <label>
        Autor:
        <input
          type="text"
          value={songAuthor}
          onChange={(e) => setSongAuthor(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        ID:
        <input
          type="text"
          value={songId}
          onChange={(e) => setSongId(e.target.value)}
          required
        />
      </label>
      <br />
      <input type="submit" value="Enviar" />
    </form>
  );

}

export default CreateSong