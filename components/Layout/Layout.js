import { useState } from "react";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = () => (darkMode ? "dark" : "light");
  return (
    <>
      <Header theme={theme()} toggleDarkMode={toggleDarkMode} />
      {children}
    </>
  );
};

export default Layout;
