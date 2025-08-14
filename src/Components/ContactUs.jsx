import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import FAQ from '../Components/FAQ'
import { FaPhone } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaWhatsapp} from 'react-icons/fa6'
import Swal from 'sweetalert2'
const ContactUs = () => {
 useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Send email via EmailJS
    emailjs
      .send(
        'service_baxhqtm', // Replace with your EmailJS service ID
        'template_bqoevx2', // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'IOAeM7yqVb21Briq0' // Replace with your EmailJS user/public key
      )
      .then(
        () => {
          Swal.fire({
  title: "success!",
  text: "Registration successful!",
  icon: "success",
 

 
});
setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <div style={{ color:"black"}} className="formUs">
      <section style={{  paddingTop:"20vh" }}>
           <div className="container" id="contactMe">
      <h2 style={{ fontSize:"1.5rem", fontFamily:"cursive"}}>Need Help?</h2>
       <p>Contact us today!</p>
       </div>
           <div style={{textAlign:"center"}}>
               <h1 style={{ fontSize:"1.5rem", fontFamily:"cursive"}}>GET HELP</h1>
           </div>
       <div className="contactUs">
       
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <label>Message:</label><br />
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="What can we help you with?"
        ></textarea><br /><br />

        <button type="submit" className="btn btn-dark">Send Message</button>
      </form>
      {status && <p>{status}</p>}
      </div>
      <hr/>
        <div className="container">
         <h1 style={{ fontSize:"1.5rem", fontFamily:"cursive"}}>Talk to us</h1>
        <p>Speak with our active Customer care representative!</p>
         <div className="row">
        <div className="col-6 col-md-6 col-lg-6">
          <p style={{ fontSize:"1rem", fontFamily:"cursive"}}>Mon-Friday</p>
           <a href='https://wa.me/2348144590363' style={{textDecoration:"none", color:"black"}}><FaWhatsapp/> Chat with us</a>
        </div>
        <div className="col-6 col-md-6 col-lg-6">
          <p style={{ fontSize:"1rem", fontFamily:"cursive"}}>Call us</p>
           <a href="tel:+234-813-3467-8092" style={{textDecoration:"none", color:"black"}}><FaPhone/>+234-813-3467-8092</a>
        </div>
                      
        </div>
        </div>
        <hr/>
       <div className="container py-4">
        <h1 style={{ fontSize:"1.5rem", fontFamily:"cursive"}}>Quick Assists?</h1>
        <p>Answers to our most frequently asked questions are just one click away.</p>
        <hr/>
        <FAQ/>
       </div>
       </section>
    </div>
  );
};

export default ContactUs;