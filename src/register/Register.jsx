
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import React, { useState } from 'react'
import axios from "axios";

 
const Register = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [artistname, setArtistname] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [foto, setFoto] = useState("");
    const [fotopre, setFotopre] = useState("");
  
    const navigate = useNavigate();

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
              setContraseña(value);
              break;
          case 'artistname':
              setArtistname(value);
              break;
          default:
              break;
      }
    }

    function handleFile(e) {
      const element = e.target;
      const file = element.files[0];
      if(!file ){
        alert('you must upload photo')
      }
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onloadend = function () {
     const base64 = reader.result;  
     console.log(base64.split(','));
     setFotopre(base64);
     const auxiliar = base64.split(',');
     console.log(auxiliar[1]);
     setFoto( auxiliar[1]);    
     }
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
    <div>
      <h3>REGISTER</h3>
    <form onSubmit={handleSubmit} className="">
                <div className= "">
                    <div className="" >Nombre</div>
                    <input className="" type='text' name='nombre' required onChange={handleChange} value={nombre} />
                </div>
                <div className= "">
                    <div className="">Apellido</div>
                    <input className="" type='text' name='apellido' required onChange={handleChange} value={apellido} />
                </div>
                <div className= "">
                    <div className="">Artist Name</div>
                    <input className="" type='text' name='artistname' required onChange={handleChange} value={artistname} />
                </div>
                <div className= "">
                    <div className="">E-mail</div>
                    <input className="" type='text' name='correo' required onChange={handleChange} value={correo} />
                </div>
                <div className= "">
                    <div className="">Password</div>
                    <input className="" type='password' name='contraseña' required onChange={handleChange} value={contraseña} />
                </div>
                <div className= "" >
                    <div className="" >Photo</div>
                    <input className="" type='file' name='foto' required onChange={handleFile} />
                    <div>{!!foto ? <img src={fotopre} width='270' alt='preview' /> : ''}</div>
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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
   
 
    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('url', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
 
    return (
        <section >
            <div >
                <div >
                    <div >
                        <div >
                            <form onSubmit={Register} >
                                <p >{msg}</p>
                                <div >
                                    <label >Name</label>
                                    <div >
                                        <input type="text" className="input" placeholder="Name"
                                            value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </div>
                                <div >
                                    <label >Email</label>
                                    <div>
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </div>
                                <div >
                                    <label >Password</label>
                                    <div >
                                        <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div >
                                    <label>Confirm Password</label>
                                    <div>
                                        <input type="password"  placeholder="******" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div >
                                    <button >Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default Register
