import React from "react";
import {
  alternative_contact_office,
  alternative_contact_sales,
  division,
} from "../Contact.module.scss";
import HR from "../../HR/HR";

const ContactInfo = () => {
  return (
    <>
      <h6>Alternatively...</h6>
      <p className={`secondaryTitle`}>Call Us</p>
      <p>
        <span>Office</span>
      </p>
      <span className={alternative_contact_office}>307</span>
      <HR />
      <p>
        <span>Martin Offersen</span> <span className={division}>(Sales)</span>
      </p>
      <span className={alternative_contact_sales}>059</span>
    </>
  );
};

export default ContactInfo;
