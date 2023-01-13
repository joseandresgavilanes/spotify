import React,{ useState }  from 'react'
import emailjs from '@emailjs/browser';

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
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <span>{errors.name}</span>}
          </label>
          <br />
          <label>
            Apellido:
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.surname && <span>{errors.surname}</span>}
          </label>
          <br />
          <label>
            Correo:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.email && <span>{errors.email}</span>}
      </label>
      <br />
      <label>
        Mensaje:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && <span>{errors.message}</span>}
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Contact