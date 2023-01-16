import React, { useState } from "react";
import axios from "axios";
import "./DeleteSong.scss";

const DeleteSong = () => {
  const [searchValue, setSearchValue] = useState("");

  const datos = {
    id: "",
    titulo: "",
    letra: "",
    carilla: "",
  };
  const handleSubmit = (e) => {
    console.log("lo buscas");
    e.preventDefault();
    axios
      .get(`https://loggin-api-production.up.railway.app/titulo/${searchValue}`)
      .then((response) => {
        console.log("lo encuentras");
        datos.id = response.data.id;
        datos.titulo = response.titulo;
        datos.letra = response.letra;
        datos.carilla = response.carilla;
      });
    console.log("lo terminas");
  };

  const handleDelete = (id) => {
    axios
      .delete(
        `https://loggin-api-production.up.railway.app/usuarios/musicaGuardada/${id}`
      )
      .then((response) => {
        console.log(response);
        alert("Objeto eliminado exitosamente");
      });
  };

  return (
    <div className="deletesong_container_main">
      <div className="deletesong_container">
        <form className="deletesong_container_form" onSubmit={handleSubmit}>
          <input
            className="deletesong_container_form_input"
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Ingresa un valor de búsqueda"
          />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className="deletesong_container_data">
          <button
            className="deletesong_container_data_delete"
            type="button"
            onClick={() => handleDelete(datos.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteSong;
