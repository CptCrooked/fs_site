import Link from "next/link";
import { useState, useContext } from "react";
import Carousel from "../components/Carousel/Carousel";
import HR from "../components/HR/HR";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  title,
  sellingPoints,
  quickLinks,
  blurb,
} from "../styles/Home.module.scss";

//! development
// import testImage from "../public/imgs/test/filler.png";
import testImage from "../public/imgs/stars/elevenMeterAfrican/11mafrlounge2-1000px.png";
import { tempMapContainer } from "../styles/Home.module.scss";

export default function Home() {
  const {
    currentTheme: { primary, secondary },
  } = useContext(ThemeContext);

  const [carouselIndex, setCarouselIndex] = useState(0);

  return (
    <>
      <Carousel
        carouselIndex={carouselIndex}
        setCarouselIndex={setCarouselIndex}
      />
      <section>
        <h1 className={`${title}`}>
          Trailers for all film and <span>entertainment needs</span>
        </h1>
        <div className={`${sellingPoints}`}>
          <h3 className={`contentWrapper secondaryTitle`}>What we provide:</h3>
          <ul className={`contentWrapper`}>
            <li>24 Hour access to our maintenance team</li>
            <HR responsive={true} />
            <li>
              Rugged trucks and trailers capable of traversing tough terrain
            </li>
            <HR responsive={true} />
            <li>17 Years of film and entertainment industry experience</li>
          </ul>
        </div>
      </section>
      <nav className={`${quickLinks}`}>
        <h2>Quick Links</h2>
        <ul className="contentWrapper">
          <HR inverse={true} />
          <li>
            <Link href="/">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About Us</a>
            </Link>
          </li>
          <HR inverse={true} />
        </ul>
      </nav>
      <section className={`contentWrapper ${blurb}`}>
        <h4 className={`secondaryTitle`}>Contact Us</h4>
        <p>Leave us a message and we will contact you.</p>
        <form>
          <input type="text" name="name" placeholder="Name" aria-label="Name" />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            aria-label="E-mail"
          />
          <input
            type="text"
            name="phone"
            placeholder="Contact Number"
            aria-label="Contact Number"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Message..."
            aria-label="Message"
          ></textarea>
          <input
            type="submit"
            value="Send"
            onClick={(e) => e.preventDefault()}
            aria-label="Send"
          />
        </form>
      </section>
      {/* <section className={tempMapContainer}>
        <div>
          <h6>Where to find us</h6>
          <div></div>
        </div>
      </section> */}
    </>
  );
}
