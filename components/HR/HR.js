import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { hr, hrAlt } from "./HR.module.scss";

const HR = ({ inverse = false }) => {
  const {
    currentTheme: { primary },
  } = useContext(ThemeContext);

  return (
    <div
      className={`${primary} ${hr} ${inverse && hrAlt}`}
      aria-hidden="true"
    ></div>
  );
};

export default HR;
