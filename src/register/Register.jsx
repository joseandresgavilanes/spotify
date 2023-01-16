import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [artistname, setArtistname] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [foto, setFoto] = useState("");
  const [fotopre, setFotopre] = useState("");
  const [repetido, setRepetido] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    if (correo) {
      axios
        .get(
          `https://loggin-api-production.up.railway.app/usuarios/correo/${correo}`
        )
        .then((response) => {
          console.log(response.data);
          /*             if(response){
             setRepetido(true);
             setErrorMessages({ name: "correo", message: errors.correo });
            }  */
        });
    }
  }, [correo]);

  /* constantes  para errores de login */
  const errors = {
    correo: "este correo ya existe en nuestra base",
  };
  const navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "nombre":
        setNombre(value);
        break;
      case "apellido":
        setApellido(value);
        break;
      case "correo":
        if (repetido) {
          /*   setRepetido(false);
              break;}
            else { */
        }
        setCorreo(value);
        break;
      case "contraseña":
        setContraseña(value);
        break;
      case "artistname":
        setArtistname(value);
        break;
      default:
        break;
    }
  }

  // generar mensaje de error
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  function handleFile(e) {
    const element = e.target;
    const file = element.files[0];
    if (!file) {
      alert("you must upload photo");
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      const base64 = reader.result;
      console.log(base64.split(","));
      setFotopre(base64);
      const auxiliar = base64.split(",");
      console.log(auxiliar[1]);
      setFoto(auxiliar[1]);
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    const registration = {
      nombre,
      artistname,
      apellido,
      correo,
      contraseña,
      foto,
    };
    //TODO para crear
    console.log(registration);
    console.log(registration.contraseña);
    if (registration) {
      try {
        const response = axios({
          url: `https://loggin-api-production.up.railway.app/usuarios`,
          method: "POST",
          data: registration,
        });
        console.log(response);
        navigate("/");
      } catch (e) {
        console.log(e);
      }
      //store.createItem(newBook);
    }
  }

  return (
    <div className="container_form">
      <div className="container_form_logo">
        <img className="form_logo-img" src="./images/krugermusic.png" alt="" />
      </div>
      <h3>REGISTER</h3>
      <form onSubmit={handleSubmit} className="">
        <div className="input-container">
          <input
            className=""
            type="text"
            name="nombre"
            required
            placeholder="Nombre"
            onChange={handleChange}
            value={nombre}
          />
        </div>
        <div className="input-container">
          <input
            className=""
            type="text"
            name="apellido"
            required
            placeholder="Apellido"
            onChange={handleChange}
            value={apellido}
          />
        </div>
        <div className="input-container">
          <input
            className=""
            type="text"
            name="artistname"
            required
            placeholder="Artist Name"
            onChange={handleChange}
            value={artistname}
          />
        </div>
        <div className="input-container">
          <input
            className=""
            type="email"
            name="correo"
            required
            placeholder="E-mail"
            onChange={handleChange}
            value={correo}
          />
          {renderErrorMessage("correo")}
        </div>
        <div className="input-container">
          <input
            className=""
            type="password"
            name="contraseña"
            required
            placeholder="Password"
            onChange={handleChange}
            value={contraseña}
          />
        </div>
        <div className="input-container">
          <input
            className=""
            type="file"
            name="foto"
            placeholder="Photo"
            required
            onChange={handleFile}
          />
          <div>
            {!!foto ? <img src={fotopre} width="270" alt="preview" /> : ""}
          </div>
        </div>
        <button className="" type="submit" value="Register User">
          REGISTER
        </button>
        <div className="gotoregister">
          <NavLink to="/">Already have an account?</NavLink>
        </div>
      </form>
    </div>
  );
};
export default Register;
