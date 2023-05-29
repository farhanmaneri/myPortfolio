import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css';
import { TfiSkype } from 'react-icons/tfi'

const Contact = () => {
//   const [message, setMessage] = useState(false);
//   const formRef = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage(true);
//     emailjs
//       .sendForm(
//         'service_1o5buia',
//         'template_r3ly5ta',
//         formRef.current,
//         'AMOCxQ4AT9Mpi7ZhH_SXh'
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );

//     e.target.reset();
//   };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>farhanmaneri@gmail.com</h5>
            <a href="mailto:khannihar69@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>What's App</h4>
            <h5>+92 313 3134 555</h5>
            <a href="https://wa.me/+923133134555">Send a message</a>
          </article>
         
        </div>

        {/* <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}
      </div>
    </section>
  );
};

export default Contact;