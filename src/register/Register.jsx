import React from "react";
import { useState } from "react";

const Register = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [artistname, setArtistname] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [foto, setFoto] = useState("");

    function handleChange(e) {
      const name = e.target.name;
      const value = e.target.value;

      switch (name) {
          case 'nombre':
              setNombre(value);
              break;
          case 'apellido':
              setApellido(value);
              break;
          case 'correo':
              setCorreo(value);
              break;
          case 'contraseña':
              setContraseña(e.target.checked);
              break;
          case 'artistname':
              setArtistname(value);
              break;
          default:
              break;
      }
    }

    function handleSubmit(e) {}

    function handleFile(e) {}


  return (
    <div>
      <h3>REGISTER</h3>
    <form onSubmit={handleSubmit} className="">
                <div className= "">
                    <div className="" >Nombre</div>
                    <input className="" type='text' name='nombre' onChange={handleChange} value={nombre} />
                </div>
                <div className= "">
                    <div className="">Apellido</div>
                    <input className="" type='text' name='apellido' onChange={handleChange} value={apellido} />
                </div>
                <div className= "">
                    <div className="">Artist Name</div>
                    <input className="" type='text' name='artistname' onChange={handleChange} value={artistname} />
                </div>
                <div className= "">
                    <div className="">E-mail</div>
                    <input className="" type='text' name='correo' onChange={handleChange} value={correo} />
                </div>
                <div className= "">
                    <div className="">Password</div>
                    <input className="" type='password' name='contraseña' onChange={handleChange} value={contraseña} />
                </div>
                <div className= "" >
                    <div className="" >Foto</div>
                    <input className="" type='file' name='foto' onChange={handleFile} />
                    <div>{!!foto ? <img src={foto} width='200' alt='preview' /> : ''}</div>
                </div>
                <input
                    className=""
                    type="submit"
                    value="Register User" />
            </form>
    </div>
  )

};

export default Register;
