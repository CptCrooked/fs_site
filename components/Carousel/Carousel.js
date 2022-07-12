import { useEffect, useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ImageContext } from "../../contexts/ImageContext";
import {
  carouselContainer,
  carouselBottomShadow,
  scrollIndicator,
  carouselImage,
  showImage,
} from "./Carousel.module.scss";
import PropTypes from "prop-types";
import Arrow from "../Arrow/Arrow";

const Carousel = ({ carouselIndex, setCarouselIndex }) => {
  const {
    currentTheme: { primary },
  } = useContext(ThemeContext);

  const { imgs } = useContext(ImageContext);

  const carouselImages = imgs["Choose Unit"];

  const auto = () => {
    const timer = setTimeout(() => {
      if (carouselIndex !== carouselImages.length - 1) {
        setCarouselIndex((prevIndex) => prevIndex + 1);
      } else {
        setCarouselIndex(0);
      }
    }, 3000);

    return timer;
  };

  useEffect(() => {
    const timer = auto();
    return () => clearTimeout(timer);
  });

  return (
    <section className={`${carouselContainer} ${primary}-shadow`} style={{}}>
      <div role="presentation" className={carouselBottomShadow}></div>
      <Arrow />
      {carouselImages.map(({ src }, elementIndex) => {
        return (
          <Image
            key={`${src.src}`}
            src={src}
            className={`${carouselImage} ${
              elementIndex === carouselIndex ? showImage : ""
            }`}
            alt=""
            layout="fill"
            priority={elementIndex < 2 ? "true" : "false"}
          />
        );
      })}
      <p className="tsandcs_banner">* T&apos;s and C&apos;s Apply</p>
    </section>
  );
};

Carousel.propTypes = {
  carouselIndex: PropTypes.number.isRequired,
  setCarouselIndex: PropTypes.func.isRequired,
};

export default Carousel;
