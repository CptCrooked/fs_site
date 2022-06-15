import { useContext, useState } from "react";
import { AlertContext } from "../../../contexts/AlertContext";
import emailjs from "@emailjs/browser";
import {
  form,
  customCaptureInput,
  captureInputDisplay,
} from "./ContactForm.module.scss";
import { FormContext } from "../../../contexts/FormContext";

const ContactForm = () => {
  const { alertArray, setAlertArray } = useContext(AlertContext);
  const { formData, setFormData, handleInputChange } = useContext(FormContext);
  const [customCapture, setCustomCapture] = useState(false);

  const confirmCapture = () => setCustomCapture((prevState) => !prevState);

  const newAlertObject = (type, message, inputElement = null) => {
    let newObject;
    if (inputElement !== null) {
      newObject = {
        type,
        message: () =>
          `${
            inputElement?.name[0].toUpperCase() + inputElement?.name.slice(1)
          } ${message}`,
      };
    } else {
      newObject = {
        type,
        message: () => `${message}`,
      };
    }
    return newObject;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // //. Clears the alert state before a new check                                               '
    // if (alertArray.length > 0) {
    //   setAlertArray([]);
    // }
    const formInputs = e.target.children;
    //. Create array of only the text inputs in the form.                                       '
    const editableInputs = [...formInputs].filter((child) => {
      if (child.type !== "submit") {
        return child;
      }
    });

    //. If the required inputs are empty, create a new alert object and add it to the temporary array,
    //. Once all the relevant inputs have been checked, update the alertArray state.

    const newAlertState = [];
    if (customCapture === true) {
      editableInputs.forEach((input) => {
        if (/\*/.test(input.placeholder) && input.value.length <= 0) {
          input.classList.add("highlight");
          newAlertState.push(newAlertObject("error", "is required", input));
        }
      });

      if (newAlertState.length < 1) {
        setAlertArray([newAlertObject("success", "Message sent!")]);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
        confirmCapture();
      } else {
        setAlertArray(newAlertState);
      }

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
    } else {
      setAlertArray([newAlertObject("error", 'Please check box above "Send"')]);
    }
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
          className={`myButton`}
        />
      </form>
    </section>
  );
};

export default ContactForm;
