import React from "react";
import Link from "next/link";
import { title } from "../../styles/Home.module.scss";
import { about_title } from "./About.module.scss";
import { quickLinks } from "../../styles/Home.module.scss";
import HR from "../../components/HR/HR";

const index = () => {
  const yearsOperational = new Date().getFullYear() - 2005;

  return (
    <>
      <h1 className={`${title} ${about_title}`}>About Fleet Star</h1>
      <div>
        <p>
          Fleet Star has supplied the film, television, commercials and events
          industries with the finest mobile location facilities available in
          South Africa, for over {yearsOperational} years.
        </p>
        <p>
          With an array of units available for actors, celebrities and crew,
          Fleet Star is uniquely positioned to provide the best possible
          solution for your on-set accommodation needs at an affordable price.
          Our fleet is meticulously maintained and regularly upgraded to ensure
          we meet the exacting demands of clients who expect nothing but the
          best.
        </p>
        <p>
          Fleet Star aims to provide a one-stop shop for all your on-location
          requirements, from mobile accommodation, showers, changing rooms,
          toilets, generators, marquees, catering vehicles to mobile workshops,
          on any location across Africa.
        </p>
      </div>
      <nav className={`${quickLinks}`}>
        <h2>Quick Links</h2>
        <ul className="contentWrapper">
          <HR inverse={true} />
          <li>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <HR inverse={true} />
        </ul>
      </nav>
    </>
  );
};

export default index;
