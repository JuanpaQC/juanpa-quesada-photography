import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InView } from 'react-intersection-observer'; // Importar InView
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Todos los campos son obligatorios.');
      return;
    }

    emailjs.send('service_nnwy0in', 'template_elg2imo', formData, 'ATaIVDcYpLelLnETy')
      .then((response) => {
        toast.success('¡Mensaje enviado con éxito!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (err) => {
        toast.error('Error al enviar el mensaje, inténtelo más tarde.');
      });
  };

  return (
    <section id="contact" className="contact">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <h2 ref={ref} className={`contact-text ${inView ? 'visible' : ''}`}>
            Contact
          </h2>
        )}
      </InView>
      <div className="contact-container">
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Subject:
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="social-links">
          <h3>Follow Me</h3>
          <div className="elfsight-app-e3f94b44-bc6a-4d6d-beb8-d0cbf7a9aca3" data-elfsight-app-lazy></div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
