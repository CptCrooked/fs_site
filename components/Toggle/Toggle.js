import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { toggle, darkModeClass } from "./Toggle.module.scss";

const Toggle = () => {
  const {
    currentTheme: { darkMode },
    toggleDarkMode,
  } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleDarkMode}
      className={`${toggle} ${darkMode ? darkModeClass : ""}`}
    >
      Toggle Dark Mode
    </button>
  );
};

export default Toggle;
