import React, { useRef, useState } from 'react';
import './contact.css';
import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/walmart.png';
import fbIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import ytIcon from '../../assets/youtube.png';
import instaIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    sender: '',
    sender_mail: '',
    message: '',
  });

  const validateForm = () => {
    const errors = {};
    if (!formValues.sender || formValues.sender.length < 0) {
      errors.sender = '*Name cannot be empty';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.sender_mail || !emailRegex.test(formValues.sender_mail)) {
      errors.sender_mail = '*Invalid email format';
    }
    if (!formValues.message || formValues.message.length < 0) {
      errors.message = '*Message cannot be empty';
    }
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      emailjs.sendForm('service_1hbjyb9', 'template_ji2c226', form.current, 'b6wYGFihBPusHJc21')
        .then(() => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email sent!');
          setFormValues({ sender: '', sender_mail: '', message: '' });
        }, (error) => {
          console.log('FAILED...', error.text);
        });
    } else {
      setFormErrors(errors);
    }
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className='contactPageTitle'>My Projects</h1>
        <p className='clientDesc'>
          I had the opportunity to work with diverse projects. The projects
          that I have worked on include
        </p>
        <div className='clientImgs'>
          <img src={walmart} alt='walmart' className='clientImg' />
          <img src={adobe} alt='adobe' className='clientImg' />
          <img src={microsoft} alt='microsoft' className='clientImg' />
          <img src={facebook} alt='facebook' className='clientImg' />
        </div>
      </div>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='ContactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='sender'
            className='name'
            placeholder='Your Name'
            value={formValues.sender}
            onChange={handleChange}
          />
          {formErrors.sender && <p className='error'>{formErrors.sender}</p>}
          <input
            type='email'
            name='sender_mail'
            className='email'
            placeholder='Your Email'
            value={formValues.sender_mail}
            onChange={handleChange}
          />
          {formErrors.sender_mail && <p className='error'>{formErrors.sender_mail}</p>}
          <textarea
            name='message'
            rows='5'
            className='msg'
            placeholder='Your Message'
            value={formValues.message}
            onChange={handleChange}
          ></textarea>
          {formErrors.message && <p className='error'>{formErrors.message}</p>}
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          <div className='links'>
            <img src={fbIcon} alt='fb' className='link' />
            <img src={twitterIcon} alt='twitter' className='link' />
            <img src={ytIcon} alt='yt' className='link' />
            <img src={instaIcon} alt='insta' className='link' />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
