import { useState, createContext } from "react";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    if (e.target.value) {
      e.target.classList.remove("highlight");
    } else {
      e.target.classList.add("highlight");
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleInputChange,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
