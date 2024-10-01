// Contact.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Contact = () => {
  return (
    <div className="cont-style">
      <h5 className='cont-h'> Get in Touch</h5>
      <p className='cont-p'>
        Whether you want to get in touch, talk about a project
        collaboration, or just say hi, I'd love to hear from
        you.
        <br />
        Please fill out the form below to discuss any work opportunities.
      </p>

      <div className="form-container">
        <input type="text" placeholder="Your Name" className="input-box" />
        <input type="email" placeholder="Your Email" className="input-box" />
        <textarea placeholder="Your Message" className="textarea-box" />
        <button className="submit-btn">Submit</button>
        <div className="social-icons">
        <i className= "fab fa-facebook-f" />
            <i className= "fab fa-instagram" />
            <i className= "fab fa-twitter" />
            <i className= "fab fa-linkedin-in" />
        </div>
        </div>
    </div>
  );
};

export default Contact;

