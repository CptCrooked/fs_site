import { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ThemeContext } from "../../contexts/ThemeContext";
import { recapture } from "../Contact/ContactForm/ContactForm.module.scss";

const ReCapture = () => {
  const handleChange = (value) => {
    console.log("Capture Value:", value);
  };

  return (
    <div className={recapture}>
      <ReCAPTCHA
        // sitekey="6Lc9j4MeAAAAAF8F7KQexZ9ciQtdYMT2fcL5tRe2"
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={handleChange}
      />
    </div>
  );
};

export default ReCapture;
