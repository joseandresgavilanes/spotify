import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CreateSong.scss";
import { useNavigate } from "react-router-dom";
const CreateSong = () => {
  const datosdb = "";
  const [songTitle, setSongTitle] = useState("");
  const [songLyrics, setSongLyrics] = useState("");
  const [songYear, setSongYear] = useState("");
  const [songCover, setSongCover] = useState(null);
  const [songTrack, setSongTrack] = useState(null);
  const [songAuthor, setSongAuthor] = useState("");
  const [songId, setSongId] = useState("");
  const [coverBase64, setCoverBase64] = useState(null);
  const [trackBase64, setTrackBase64] = useState(null);
  const [datamusicdb, setDatamusicdb] = useState(null);

  const navigate = useNavigate();

  const currentYear = new Date();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (songCover) {
      const reader = new FileReader();
      reader.readAsDataURL(songCover);
      reader.onloadend = () => {
        setCoverBase64(reader.result);
      };
    }
  }, [songCover]);

  useEffect(() => {
    if (songTrack) {
      const reader = new FileReader();
      reader.readAsDataURL(songTrack);
      reader.onloadend = () => {
        setTrackBase64(reader.result);
      };
    }
  }, [songTrack]);

  function validateForm(data) {
    if (!data.songTitle || !data.songCover || !data.songTrack) {
      return false;
    }
    return true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/library");
    const formData = { songTitle, songLyrics, songYear, songCover, songTrack };
    if (!validateForm(formData)) {
      console.log("Por favor completa todos los campos obligatorios");
      return;
    }
    try {
      const data = {
        titulo: songTitle,
        letra: songLyrics,
        anio: currentYear.getFullYear,
        carilla: coverBase64,
        musica: trackBase64,
        nombre: storedUser.nombre,
        idDueño: storedUser.id,
      };
      const response = axios({
        url: `https://loggin-api-production.up.railway.app/usuarios/musicadb/postear`,
        method: "POST",
        data: data,
      });
      const nombreCancion = data.titulo;
      const respuesta = await axios.put(
        `https://loggin-api-production.up.railway.app/usuarios/musicaUsuario/${storedUser.id}/${nombreCancion}`
      );
      if (respuesta.status === 200) {
        console.log("Canción agregada");
      }
      //Reset form
      setSongTitle("");
      setSongLyrics("");
      setSongYear("");
      setSongCover(null);
      setSongTrack(null);
      setSongAuthor("");
      setSongId("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create_song_page">
      <div className="song-form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <p className="titulo_creacion_cancion">Título de la canción:</p>
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
          <div className="form-group_letras">
            <label>
              Letra de la canción:
              <textarea
                value={songLyrics}
                onChange={(e) => setSongLyrics(e.target.value)}
                className="form-control_letra"
              />
            </label>
          </div>
          <div className="form-group_boton">
            <input type="submit" value="Enviar" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSong;
