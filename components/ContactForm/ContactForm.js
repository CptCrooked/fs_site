import { useContext } from "react";
import { AlertContext } from "../../contexts/AlertContext";
import emailjs from "@emailjs/browser";
import { form } from "./ContactForm.module.scss";
import ReCapture from "../ReCapture/ReCapture";
import { FormContext } from "../../contexts/FormContext";

const ContactForm = () => {
  const { alertArray, setAlertArray } = useContext(AlertContext);
  const { handleInputChange } = useContext(FormContext);

  const newAlertObject = (inputElement, type, message) => {
    return {
      type,
      message: () =>
        `${
          inputElement?.name[0].toUpperCase() + inputElement?.name.slice(1)
        } ${message}`,
    };
  };

  const sendEmail = (e) => {
    e.preventDefault();
    //. Clears the alert state before a new check                                               '
    if (alertArray.length > 0) {
      setAlertArray([]);
    }
    const formInputs = e.target.children;
    //. Create array of only the text inputs in the form.                                       '
    const editableInputs = [...formInputs].filter((child) => {
      if (child.type !== "submit") {
        return child;
      }
    });

    //. For each text input that is empty and has a "*" in the placeholder text (required),    '
    //. create an alert object and add to alertArray state.                                    '
    editableInputs.forEach((input) => {
      if (input.value.length <= 0 && /\*/.test(input.placeholder)) {
        input.classList.add("highlight");
        setAlertArray((prevAlerts) => [
          ...prevAlerts,
          newAlertObject(input, "error", "is required"),
        ]);
      }
    });

    /*
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
          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
          })
        },
        (error) => {
          console.log(error);
        }
      );
      */
  };

  return (
    <section className={`contentWrapper ${form}`}>
      <h4 className={`secondaryTitle`}>Contact Us</h4>
      <h5>Leave us a message and we will contact you.</h5>
      <p>Fields marked with * are required</p>
      <form onSubmit={(e) => sendEmail(e)} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          aria-label="Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          aria-label="Company (optional)"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail Address*"
          aria-label="E-mail Address"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          aria-label="Contact Number"
          onChange={handleInputChange}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message..."
          aria-label="Message"
          onChange={handleInputChange}
        ></textarea>
        {/* <ReCapture /> */}
        <input type="submit" id="submit" value="Send" aria-label="Send" />
      </form>
    </section>
  );
};

export default ContactForm;
