import Link from "next/link";
import { useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import HR from "../components/HR/HR";
import { title, sellingPoints, quickLinks } from "../styles/Home.module.scss";

//! development

export default function Home() {
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
          <aside className={``}>
            <p>
              With an array of units available for actors, celebrities and crew,
              Fleet Star is uniquely positioned to provide the best possible
              solution for your on-set accommodation needs at an affordable
              price.
            </p>
          </aside>
          <HR remainsHorizontal={true} />
          <ul className={`contentWrapper`}>
            <li>
              Rugged trucks and trailers capable of traversing tough terrain
            </li>
            <HR responsive={true} />
            <li>24 Hour access to our maintenance team</li>
            <HR responsive={true} />
            <li>17 Years of film and entertainment industry experience</li>
          </ul>
          <HR remainsHorizontal={true} />
        </div>
      </section>
      <nav className={`${quickLinks}`}>
        <h2>Quick Links</h2>
        <ul className="contentWrapper">
          <HR inverse={true} />
          <li>
            <Link href="/gallery">
              <a>Trailers</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <HR inverse={true} />
        </ul>
      </nav>
    </>
  );
}
