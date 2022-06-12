import { useContext, useEffect, useRef } from "react";
import { AlertContext } from "../../contexts/AlertContext";
import Alert from "./Alert";
import { alertList } from "./AlertList.module.scss";
import { v4 as uuid } from "uuid";

const AlertList = () => {
  const { alertArray, setAlertArray } = useContext(AlertContext);

  const ulRef = useRef(null);
  const alertTimer = useRef();

  useEffect(() => {
    ulRef.current.classList.remove("showAlertList");
    if (alertArray.length > 0) {
      ulRef.current.classList.add("showAlertList");
      alertTimer.current = setTimeout(() => {
        ulRef.current.classList.remove("showAlertList");
      }, 3000);
    }

    return () => {
      clearTimeout(alertTimer.current);
      if (alertArray > 0) {
        setAlertArray([]);
      }
      console.log(alertArray);
    };
  }, [alertArray, setAlertArray]);

  return (
    <ul role="alert" className={`${alertList}`} ref={ulRef}>
      {alertArray?.length > 0
        ? alertArray.map((alertObject) => {
            return (
              <Alert
                // key={uuid()}
                key={Math.random()}
                type={alertObject.type}
                message={alertObject.message()}
              />
            );
          })
        : null}
    </ul>
  );
};

export default AlertList;
