import { useRef } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser";

import { form } from "./ContactForm.module.scss";
import ReCapture from "../ReCapture/ReCapture";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9p73ljj",
        "template_ehxejvr",
        e.target,
        "user_K49o11aaGCnunDj7TA7FJ"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <section className={`contentWrapper ${form}`}>
      <h4 className={`secondaryTitle`}>Contact Us</h4>
      <p>Leave us a message and we will contact you.</p>
      <form onSubmit={(e) => sendEmail(e)}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Name"
          autoComplete="off"
        />
        <input
          type="text"
          name="company"
          placeholder="Company (optional)"
          aria-label="Company (optional)"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail Address"
          aria-label="E-mail Address"
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
        {/* <ReCapture /> */}
        <input type="submit" value="Send" aria-label="Send" />
      </form>
    </section>
  );
};

export default ContactForm;
