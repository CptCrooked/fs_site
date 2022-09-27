import React from "react";
import {
  alternative_contact_office,
  alternative_contact_sales,
  division,
  googleMapLink,
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
      <HR />
      <p>
        <span>Where to find us</span>
        <a
          className={`customButton ${googleMapLink}`}
          href="https://g.page/fleetstar-film-trailers?share"
          target="_blank"
          rel="noreferrer"
        >
          Fleet Star Location
        </a>
      </p>
    </>
  );
};

export default ContactInfo;
