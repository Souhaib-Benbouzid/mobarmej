import React from "react";
import "./contact.styles.scss";
import "../../aos";

import ContactForm from "../../components/contact-form/contactForm.component";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-cta">
          <h1 data-aos="fade-right" className="title">
            Get in touch and let us start <br />
            <span className="text-orange">realizing your idea.</span>
          </h1>
          <p data-aos="fade-up" className="description">
            Using Landkit to build your site means never worrying about
            designing another page or cross browser compatibility. Our
            ever-growing library of components and pre-designed layouts will
            make your life easier.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
