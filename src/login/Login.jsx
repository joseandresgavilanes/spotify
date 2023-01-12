import React from "react";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userdb, setUserdb] = useState([]);
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  //Load User
  async function loadUser(user) {
    try {
      axios
        .get(
          `https://loggin-api-production.up.railway.app/usuarios/correo/${user}`
        )
        .then((json) => {
          console.log(json.data);
          setUserdb(json.data);
        });

      /*  const request = await fetch(
        `https://loggin-api-production.up.railway.app/usuarios/correo/${user}`
        );
        const json = await request.json();
        setUserdb(json);
        console.log(json);  */
    } catch (error) {}
  }
  /* constantes  para errores de login */
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    data: "el usuario no existe en nuestra base",
  };

  //submit//

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    // Find user login info
    loadUser(uname);
    console.log("pasa el load user");

    const userData = userdb;
    if (userData.nombre !== "") {
      console.log(userdb.contraseña);
      console.log(userData.nombre);
      // Compare user info

      if (userData) {
        if (userData.correo === uname && userData.contraseña === pass) {
          console.log("usuario y contraseña correctos");
          setIsSubmitted(true);
        } else if (userData.correo !== uname) {
          // Nombre de Usuario no Encontrado
          setErrorMessages({ name: "uname", message: errors.uname });
          
        } else {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        }
      } else {
        setErrorMessages({ name: "uname", message: errors.data });
      }
    }
  };
  // generar mensaje de error

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            placeholder="User .."
            required
            onChange={(e) => setUname(e.target.value)}
            value={uname}
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            placeholder="Password .."
            required
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
          <button>Register</button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div>
        <div></div>
        <h1> Sign In</h1>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
};

export default Login;
