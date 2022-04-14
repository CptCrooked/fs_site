import { useEffect, useRef, useContext } from "react";
import { AlertContext } from "../../contexts/AlertContext";
import { alert } from "./AlertList.module.scss";

const Alert = ({ type, message }) => {
  const { alertArray } = useContext(AlertContext);
  const liRef = useRef(null);

  useEffect(() => {
    liRef.current.classList.add("showAlertItem");
  }, []);

  return (
    <li role="alert" ref={liRef} className={`${alert} ${type}`}>
      {message}
    </li>
  );
};

export default Alert;
