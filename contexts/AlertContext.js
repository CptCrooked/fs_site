import { useState, createContext } from "react";

export const AlertContext = createContext();

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
