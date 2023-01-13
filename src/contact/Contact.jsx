import React,{ useState }  from 'react'
import emailjs from '@emailjs/browser';
import './Contact.scss'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
      });
    
      const [errors, setErrors] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
      });
    
      const handleChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: value ? '' : 'Este campo es requerido' });
      };
    
      const handleBlur = event => {
        const { name, value } = event.target;
        if (!value) {
          setErrors({ ...errors, [name]: 'Este campo es requerido' });
        } else if (name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          setErrors({ ...errors, email: 'La dirección de correo no es válida' });
        }
      };
    
      const handleSubmit = event => {
        event.preventDefault();
        if (!formData.name || !formData.surname || !formData.email || !formData.message) {
          setErrors({
            name: !formData.name ? 'Este campo es requerido' : '',
            surname: !formData.surname ? 'Este campo es requerido' : '',
            email: !formData.email ? 'Este campo es requerido' : '',
            message: !formData.message ? 'Este campo es requerido' : ''
          });
        } else {
            emailjs.sendForm('service_ovlhjgh', 'template_5waegri', event.target, 'yqN3nitUMC9bwLsQF')
            .then((result) => {
              console.log(result.text);
            }, (error) => {
              console.log(error.text);
            });
      
        }
      };
    
      return (
        <div className='formulario-espacio'>
        <form onSubmit={handleSubmit} className='formulario_contenedor'>
            <div className='formulario_nombres'>
          <label className='formulario_label'>
            <div className='formulario_letras'>Nombre:</div>
            <input className='formulario_nombre'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <div className='formulario_errores'>{errors.name}</div>
          </label>
          <br />
          <label className='formulario_label'>
          <div className='formulario_letras_apellido'>Apellido:</div> 
            <input className='formulario_apellido'
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.surname && <div className='formulario_errores'>{errors.surname}</div>}
          </label>
          </div>
          <br />
          <label className='formulario_label'>
          <div className='formulario_letras'>Correo:</div>
            <input className='formulario_inputs_correo'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.email && <div className='formulario_errores'>{errors.email}</div>}
      </label>
      <br />
      <label className='formulario_label'>
      <div className='formulario_letras_mensaje'>Mensaje:</div>
        <textarea  className='formulario_inputs_textArea'
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && <div className='formulario_errores'>{errors.message}</div>}
      </label>
      <br />
      <button type="submit" className='formulario_submit'>Enviar</button>
    </form>
    </div>
  );
}

export default Contact