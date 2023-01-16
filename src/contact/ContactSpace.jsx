import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSpace.scss";

const ContactSpace = () => {
  const [entrando, setEntrando] = useState(false);

  useEffect(() => {
    setEntrando(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    sent: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    sentI: "",
    sentC: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: value ? "" : "Este campo es requerido" });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!value) {
      setErrors({ ...errors, [name]: "Este campo es requerido" });
    } else if (
      name === "email" &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      setErrors({ ...errors, email: "La dirección de correo no es válida" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.surname ||
      !formData.email ||
      !formData.message
    ) {
      setErrors({
        name: !formData.name ? "Este campo es requerido" : "",
        surname: !formData.surname ? "Este campo es requerido" : "",
        email: !formData.email ? "Este campo es requerido" : "",
        message: !formData.message ? "Este campo es requerido" : "",
        sentI: "Formulario no enviado",
      });
    } else {
      emailjs
        .sendForm(
          `service_ovlhjgh`,
          "template_5waegri",
          event.target,
          "TLrLOgeF50lkwtBmX"
        )
        .then(
          (result) => {
            setErrors({
              sentC: "Formulario enviado correctamente",
            });
            setFormData({ name: "", email: "", message: "", surname: "" });
          },
          (error) => {
            setErrors({
              sentI: "Formulario no enviado",
            });
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`formulario_contenedor ${
        entrando ? "mi-formulario-entrando" : ""
      }`}
    >
      <h1 className="titulo-formulario">Contacto</h1>
      <div className="formulario_nombres">
        <label className="formulario_label_nombre">
          <div className="formulario_letras_nombre">
            <h3>Nombre</h3>
          </div>
          <input
            className="formulario_nombre"
            type="text"
            name="name"
            placeholder="Juan"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div className="formulario_errores">{errors.name}</div>
        </label>
        <br />
        <label className="formulario_label_apellido">
          <div className="formulario_letras_apellido">
            <h3>Apellido</h3>
          </div>
          <input
            className="formulario_apellido"
            type="text"
            name="surname"
            placeholder="Sin Miedo"
            value={formData.surname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.surname && (
            <div className="formulario_errores_apellido">{errors.surname}</div>
          )}
        </label>
      </div>
      <br />
      <label className="formulario_label">
        <div className="formulario_letras_correo">
          <h3>Correo</h3>
        </div>
        <input
          className="formulario_inputs_correo"
          type="email"
          name="email"
          placeholder="correo@correo.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && (
          <div className="formulario_errores_correo">{errors.email}</div>
        )}
      </label>
      <br />
      <label htmlFor="Mensaje" className="formulario_label">
        <div className="formulario_letras_mensaje">
          <h3>Mensaje</h3>
        </div>
        <textarea
          className="formulario_inputs_textArea"
          name="message"
          placeholder="Dinos, para que nos necesitas?"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && (
          <div className="formulario_errores_mensaje">{errors.message}</div>
        )}
      </label>
      <br />
      <div className="final-formulario">
        <input className="formulario-submit" type="submit" value="Enviar" />
        {errors.sentI && (
          <div className="formulario_errores_i">{errors.sentI}</div>
        )}
        {errors.sentC && (
          <div className="formulario_correcto_c">{errors.sentC}</div>
        )}
      </div>
    </form>
  );
};

export default ContactSpace;
