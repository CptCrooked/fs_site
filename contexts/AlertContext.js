import { useState, createContext } from "react";

export const AlertContext = createContext();

// enter Fields
// click sendEmail
// run the validation
// if there is a required field that is empty,
// -- show alert with relevant info (Field that is empty and add relevant colouring class)
// if the email does not return a status of 200
// -- show an error alert with the message "An error occured. Please try again"

const AlertContextProvider = ({ children }) => {
  const [alertArray, setAlertArray] = useState([]);

  return (
    <AlertContext.Provider
      value={{
        alertArray,
        setAlertArray,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
