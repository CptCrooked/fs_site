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
          Trailers for all film and entertainment needs
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
        <h4 className={`secondaryTitle`}>Lorem ipsum dolor sit?</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
          voluptatum laborum id ratione? Fugit totam impedit quia, quos
          aspernatur aliquam magni delectus minus doloribus ea tempora, aliquid
          assumenda? Dignissimos consequatur magni exercitationem repudiandae
          deleniti laborum repellat qui beatae, quae enim assumenda ratione
          laboriosam magnam molestiae commodi debitis aspernatur at, totam vero
          ipsum a quam voluptatibus. Ab magni mollitia rem dolorum distinctio
          asperiores quisquam illum unde autem esse porro doloremque quis
          ratione dicta doloribus amet omnis quo, provident accusantium sed nisi
          velit ad eaque. Nemo perspiciatis dolorum dolor minima illo, adipisci
          dolores soluta eligendi expedita cum repudiandae sint quam quis neque.
        </p>
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
