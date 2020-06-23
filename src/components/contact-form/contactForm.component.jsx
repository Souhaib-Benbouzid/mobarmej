import React from "react";
import "../../aos";

import "./contactForm.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class ContactForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    console.log("changed");
  };

  render() {
    return (
      <form data-aos="fade-left" className="contact-form">
        <span data-aos="fade-down" data-aos-delay="200">
          Let us hear from you directly!
        </span>
        <FormInput
          type="text"
          name="name"
          value={this.state.name}
          handleChange={this.handleChange}
          label="Full Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={this.state.email}
          handleChange={this.handleChange}
          label="Email"
          required
        />
        <FormInput
          type="text"
          name="message"
          value={this.state.message}
          handleChange={this.handleChange}
          label="Your Message ..."
          required
        />
        <CustomButton data-aos-delay="300" type="submit">
          Send
        </CustomButton>
      </form>
    );
  }
}

export default ContactForm;
