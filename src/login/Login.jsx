import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = () => {
  // React States
  const [userdb, setUserdb] = useState(null);
  const [errorMessages, setErrorMessages] = useState({});
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Load User
  useEffect(() => {
    if (uname) {
      axios
        .get(`https://loggin-api-production.up.railway.app/usuarios/correo/${uname}`)
        .then((response) => {
          setUserdb(response.data);
        });
    }
  }, [uname]);

  /* constantes  para errores de login */
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    data: "el usuario no existe en nuestra base",
  };

  //submit
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    if (userdb) {
      if (userdb.correo === uname && userdb.contraseña === pass) {
        console.log("usuario y contraseña correctos");
        setIsSubmitted(true);
      } else if (userdb.correo !== uname) {
        // Nombre de Usuario no Encontrado
        setErrorMessages({ name: "uname", message: errors.uname });
      } else {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.data });
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
            placeholder="e-mail ..."
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
        <button type="submit">Login</button>
      </form>
    </div>
  );

  return     <div>
  <div>
    <div></div>
    <h1> Sign In</h1>
    {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
  </div>
</div>;
};

export default Login;