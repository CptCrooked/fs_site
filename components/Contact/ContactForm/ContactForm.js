import { useContext, useState, useRef } from "react";
import { AlertContext } from "../../../contexts/AlertContext";
import emailjs from "@emailjs/browser";
import {
  form,
  customCaptureInput,
  captureInputDisplay,
} from "./ContactForm.module.scss";
import { FormContext } from "../../../contexts/FormContext";

const ContactForm = () => {
  const { alertArray, setAlertArray, newAlertObject } =
    useContext(AlertContext);
  const { formData, setFormData, handleInputChange } = useContext(FormContext);
  const [customCapture, setCustomCapture] = useState(false);
  const formRef = useRef(null);

  const confirmCapture = () => setCustomCapture((prevState) => !prevState);

  const sendEmail = (e) => {
    console.log(1);
    e.preventDefault();
    // //. Clears the alert state before a new check                                               '
    // if (alertArray.length > 0) {
    //   setAlertArray([]);
    // }
    console.log(2);
    const formInputs = formRef.current.children;
    //. Create array of only the text inputs in the form.                                       '
    const editableInputs = [...formInputs].filter((child) => {
      console.log(`3 ... Editable inputs loop`);
      if (child.name === "customCapture" || child.name === "" || !child.name) {
      } else {
        return child;
      }
    });

    //. If the required inputs are empty, create a new alert object and add it to the temporary array,
    //. Once all the relevant inputs have been checked, update the alertArray state.

    console.log(`4 ... Custom Capture`);
    const newAlertState = [];
    console.log(`4 ... Custom Capture`);
    if (customCapture === true) {
      editableInputs.forEach((input) => {
        //. If any of the inputs are required, yet they
        //. are empty, highlight is and push an error to the list.
        if (/\*/.test(input.placeholder) && input.value.length <= 0) {
          input.classList.add("highlight");
          newAlertState.push(newAlertObject("error", "is required", input));
        }
      });

      if (newAlertState.length < 1) {
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        confirmCapture();
        setAlertArray([newAlertObject("success", "Message sent!")]);
      } else {
        setAlertArray(newAlertState);
      }

      emailjs
        .sendForm(
          "service_kjqxsyf",
          "template_9hz7xtn",
          e.target,
          "2bzIRAahggVw66nJt"
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
            });
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      setAlertArray([newAlertObject("error", 'Check box above "Send"')]);
    }
  };

  return (
    <section className={`contentWrapper ${form}`}>
      <h4 className={`secondaryTitle`}>Contact Us</h4>
      <h5>Leave us a message and we will contact you.</h5>
      <p>Fields marked with * are required</p>
      <form onSubmit={(e) => sendEmail(e)} autoComplete="off" ref={formRef}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          aria-label="Name"
          onChange={handleInputChange}
          value={formData.name}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          aria-label="Company (optional)"
          onChange={handleInputChange}
          value={formData.company}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail Address*"
          aria-label="E-mail Address"
          onChange={handleInputChange}
          value={formData.email}
        />
        <input
          type="text"
          name="phone"
          placeholder="Contact Number"
          aria-label="Contact Number"
          onChange={handleInputChange}
          value={formData.phone}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message..."
          aria-label="Message"
          onChange={handleInputChange}
          value={formData.message}
        ></textarea>
        <input
          type="checkbox"
          name="customCapture"
          id="customCapture"
          onChange={confirmCapture}
          className={customCaptureInput}
          checked={customCapture}
        />
        <label
          className={captureInputDisplay}
          name="customCapture"
          htmlFor="customCapture"
        >
          Check the box if you are a human.
        </label>
        <input
          type="submit"
          id="submit"
          value="Send"
          aria-label="Send"
          className={`customButton`}
        />
      </form>
    </section>
  );
};

export default ContactForm;
