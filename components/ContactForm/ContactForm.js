import React from "react";
import { form } from "./ContactForm.module.scss";
const ContactForm = () => {
  return (
    <section className={`contentWrapper ${form}`}>
      <h4 className={`secondaryTitle`}>Contact Us</h4>
      <p>Leave us a message and we will contact you.</p>
      <form>
        <input type="text" name="name" placeholder="Name" aria-label="Name" />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          aria-label="E-mail"
        />
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          aria-label="Contact Number"
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message..."
          aria-label="Message"
        ></textarea>
        <input
          type="submit"
          value="Send"
          onClick={(e) => e.preventDefault()}
          aria-label="Send"
        />
      </form>
    </section>
  );
};

export default ContactForm;
