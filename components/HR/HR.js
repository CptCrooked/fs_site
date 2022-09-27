import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { hr, responsiveHr, hrAlt, wider_hr } from "./HR.module.scss";

const HR = ({
  inverse = false,
  responsive = false,
  remainsHorizontal = false,
}) => {
  const {
    currentTheme: { primary },
  } = useContext(ThemeContext);

  return (
    <div
      className={`${primary} ${hr} ${remainsHorizontal && wider_hr} ${
        inverse && hrAlt
      } ${responsive && responsiveHr}`}
      aria-hidden="true"
    ></div>
  );
};

export default HR;
