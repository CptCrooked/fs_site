import { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const currentTheme = {
    primary: darkMode ? "dark" : "light",
    secondary: darkMode ? "light" : "dark",
  };
  console.log(currentTheme);
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
