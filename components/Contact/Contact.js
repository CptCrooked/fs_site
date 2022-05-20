import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import { contact_section } from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={contact_section}>
      <ContactForm />
      <ContactInfo />
    </section>
  );
};

export default Contact;
