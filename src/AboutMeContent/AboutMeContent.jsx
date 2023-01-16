import React, { useState, useRef } from "react";
import "./AboutMeContent.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AboutMeContent = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [fotopre, setFotopre] = useState("");
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    id: storedUser.id,
    nombre: storedUser.nombre,
    apellido: storedUser.apellido,
    correo: storedUser.correo,
    contraseña: storedUser.contraseña,
    artistname: storedUser.artistname,
    foto: storedUser.foto,
  });
  const [imageFile, setImageFile] = useState(null);

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handlePhotoChange = (e) => {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      const base64 = reader.result;
      console.log(base64.split(","));
      setFotopre(base64);
      const auxiliar = base64.split(",");
      console.log(auxiliar[1]);
      setImageFile(auxiliar[1]);
    };
  };

  const handleSaveClick = async () => {
    setEditing(!editing);
    const datosActualizados = {
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      correo: user.correo,
      contraseña: user.contraseña,
      artistname: user.artistname,
      foto: imageFile,
    };
    // Enviar los cambios del usuario al servidor
    try {
      const response = await axios.put(
        "https://loggin-api-production.up.railway.app/usuarios",
        datosActualizados
      );
      // si el servidor responde con un 200, mostrar un mensaje de exito
      if (response.status === 200) {
        console.log("Usuario actualizado correctamente");
      }
    } catch (error) {
      console.log(error);
    }
    axios
      .get(`https://loggin-api-production.up.railway.app/usuarios/${user.id}`)
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
      });
  };

  return (
    <div className="about_user_scroll">
      <NavLink to="/">
        <div className="logout">Log out</div>
      </NavLink>
      <div className="aboutMe_user">
        <div className="user-container">
          <img
            className="user-photo rounded-circle"
            src={
              storedUser.foto
                ? `data:image/jpeg;base64,${storedUser.foto}`
                : "https://icon-library.com/images/profile-icon-white/profile-icon-white-1.jpg"
            }
            alt="User Photo"
          />
          <button
            className="aboutMe_editar_foto"
            onClick={handleButtonClick}
            style={{ display: editing ? "block" : "none" }}
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoChange}
            style={{ display: "none" }}
          />
          <h2 className="AboutMe_user_title">Account overview</h2>
          <div className="AboutMe_user_info">
            <div className="aboutMe_user_columnas">
              <p>User Id:</p>
              <h2 className="AboutMe_userId_text">{user.id}</h2>
            </div>
            <div className="aboutMe_user_columnas">
              <p>Name:</p>
              <input
                className="user-first-name"
                type="text"
                value={user.nombre}
                disabled={!editing}
                onChange={(e) => setUser({ ...user, nombre: e.target.value })}
              />
            </div>
            <div className="aboutMe_user_columnas">
              <p>Last name:</p>
              <input
                className="user-last-name"
                type="text"
                value={user.apellido}
                disabled={!editing}
                onChange={(e) => setUser({ ...user, apellido: e.target.value })}
              />
            </div>
            <div className="aboutMe_user_columnas">
              <p>Email:</p>
              <input
                className="user-email"
                type="email"
                value={user.correo}
                disabled={!editing}
                onChange={(e) => setUser({ ...user, correo: e.target.value })}
              />
            </div>
            <div className="aboutMe_user_columnas">
              <p>Password:</p>
              <input
                className="user-password"
                type={editing ? "text" : "password"}
                value={user.contraseña}
                disabled={!editing}
                onChange={(e) =>
                  setUser({ ...user, contraseña: e.target.value })
                }
              />
            </div>
            <div className="aboutMe_user_columnas">
              <p>Artist name:</p>
              <input
                className="user-nickname"
                type="text"
                value={user.artistname}
                disabled={!editing}
                onChange={(e) =>
                  setUser({ ...user, artistname: e.target.value })
                }
              />
            </div>
          </div>
          <div className="Contenedor_botones_about">
            <div className="AboutMe_botones_de_pie">
              <button
                className="save-button"
                onClick={handleSaveClick}
                style={{ display: editing ? "block" : "none" }}
              >
                Guardar
              </button>
              <button className="edit-button" onClick={handleEditClick}>
                {editing ? "Cancelar" : "Editar"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
