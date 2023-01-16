import React, { useState } from "react";
import axios from "axios";
import "./EditSong.scss";

const EditSong = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [cancion, setCancion] = useState(null);

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAudioChange = (e) => {
    setAudio(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    console.log("presionaste");
    e.preventDefault();
    axios
      .get(`https://loggin-api-production.up.railway.app/titulo/${id}`)

      .then((response) => {
        console.log("llamaste a la api");
        setTitle(response.data.titulo);
        setLyrics(response.data.letra);
        setCancion(response.data);
        console.log(response.data);
        setIsDisabled(false);
      });
    console.log("terminaste con la api");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log(cancion);
    let formData = new FormData();
    formData.append("id", cancion[0].id);

    if (title) {
      formData.append("titulo", title);
    }
    if (lyrics) {
      formData.append("letra", lyrics);
    }

    if (image) {
      let imageReader = new FileReader();
      imageReader.readAsDataURL(image);
      imageReader.onloadend = () => {
        formData.append("carilla", imageReader.result);
      };
    }
    if (audio) {
      let audioReader = new FileReader();
      audioReader.readAsDataURL(audio);
      audioReader.onloadend = () => {
        formData.append("musica", audioReader.result);
      };
    }
    console.log(formData);

    axios
      .put(`https://loggin-api-production.up.railway.app/`, formData)
      .then((response) => {
        console.log(response);
        alert("Canción editada exitosamente");
      });
  };

  return (
    <div className="editsong_container">
      <form className="editSong">
        <label className="editSong_label">Buscar por ID:</label>
        <input
          className="editSong_input"
          type="text"
          id="id"
          value={id}
          onChange={handleChange}
        />
        <button className="editSong_btn" type="submit" onClick={handleSubmit}>
          Buscar
        </button>

        <label className="editSong_label">Título:</label>
        <input
          className="editSong_input"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isDisabled}
        />

        <label className="editSong_label">Letra:</label>
        <textarea
          className="editSong_input"
          id="lyrics"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          disabled={isDisabled}
        ></textarea>

        <label className="editSong_label">Carilla:</label>
        <input
          className="editSong_input"
          type="file"
          id="image"
          onChange={handleImageChange}
          disabled={isDisabled}
        />

        <label className="editSong_label">Música:</label>
        <input
          className="editSong_input"
          type="file"
          id="audio"
          onChange={handleAudioChange}
          disabled={isDisabled}
        />
        <button
          className="editSong_btn"
          type="button"
          onClick={handleEdit}
          disabled={isDisabled}
        >
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditSong;
