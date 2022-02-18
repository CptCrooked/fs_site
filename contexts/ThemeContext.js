import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const currentTheme = {
    primary: darkMode ? "dark" : "light",
    secondary: darkMode ? "light" : "dark",
    darkMode: darkMode,
  };

  // useEffect(() => {
  //   if (condition) {

  //   }
  // }, [darkmode])

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
