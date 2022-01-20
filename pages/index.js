import Link from "next/link";
import { useState, useContext } from "react";
import Carousel from "../components/Carousel/Carousel";
import HR from "../components/HR/HR";
import { ThemeContext } from "../contexts/ThemeContext";
import { title, sellingPoints, quickLinks } from "../styles/Home.module.scss";

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
          Trailers for all film and entertainment needs
        </h1>
        <div className={`contentWrapper ${sellingPoints}`}>
          <h3>What we provide:</h3>
          <ul>
            <HR />
            <li>
              Rugged trucks and trailers capable of traversing tough terrain
            </li>
            <HR />
            <li>17 Years of film and entertainment industry experience</li>
            <HR />
            <li>24 Hour access to our maintenance team</li>
          </ul>
        </div>
      </section>
      <nav className={`${quickLinks}`}>
        <h2>Quick Links</h2>
        <ul className="contentWrapper">
          <HR inverse={true} />
          <li>
            <Link href="">
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>About Us</a>
            </Link>
          </li>
          <HR inverse={true} />
        </ul>
      </nav>
      <section className={tempMapContainer}>
        <div>
          <h6>Where to find us</h6>
          <div></div>
        </div>
      </section>
    </>
  );
}
