import { useEffect, useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ImageContext } from "../../contexts/ImageContext";
import {
  carouselContainer,
  carouselBottomShadow,
  carouselImage,
  showImage,
} from "./Carousel.module.scss";
import PropTypes from "prop-types";

const Carousel = ({ carouselIndex, setCarouselIndex }) => {
  const {
    currentTheme: { primary },
  } = useContext(ThemeContext);

  const {
    imgs: { carouselImages },
  } = useContext(ImageContext);

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
      {carouselImages.map(({ src }, elementIndex) => {
        return (
          <Image
            className={`${carouselImage} ${
              elementIndex === carouselIndex ? showImage : ""
            }`}
            key={`${src.src}`}
            src={src}
            alt=""
            layout="fill"
            priority={elementIndex < 2 ? "true" : "false"}
          />
        );
      })}
    </section>
  );
};

Carousel.propTypes = {
  carouselIndex: PropTypes.number.isRequired,
  setCarouselIndex: PropTypes.func.isRequired,
};

export default Carousel;
