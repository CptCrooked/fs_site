import { useState, createContext } from "react";

export const AlertContext = createContext();

const AlertContextProvider = ({ children }) => {
  const [alertArray, setAlertArray] = useState([]);

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

  return (
    <AlertContext.Provider
      value={{
        alertArray,
        setAlertArray,
        newAlertObject,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
