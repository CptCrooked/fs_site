import { useContext } from "react";
import { AlertContext } from "../../../contexts/AlertContext";
import emailjs from "@emailjs/browser";
import { form } from "./ContactForm.module.scss";
import ReCapture from "../../ReCapture/ReCapture";
import { FormContext } from "../../../contexts/FormContext";

const ContactForm = () => {
  const { alertArray, setAlertArray } = useContext(AlertContext);
  const { handleInputChange } = useContext(FormContext);

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
    editableInputs.forEach((input) => {
      if (/\*/.test(input.placeholder) && input.value.length <= 0) {
        console.log(`looping through inputs`);
        input.classList.add("highlight");
        newAlertState.push(newAlertObject("error", "is required", input));
      }
    });

    if (newAlertState.length < 1) {
      setAlertArray([newAlertObject("success", "Message sent!")]);
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