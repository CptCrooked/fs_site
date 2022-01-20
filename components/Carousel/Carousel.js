import { useEffect, useContext } from "react";
import Image from "next/image";
import {
  carouselContainer,
  carouselBottomShadow,
  carouselImage,
  showImage,
  scrollIndicator,
} from "./Carousel.module.scss";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContext";

const Carousel = ({ carouselIndex, setCarouselIndex }) => {
  const {
    currentTheme: { primary },
  } = useContext(ThemeContext);

  const carouselImages = [
    { url: "/imgs/stars/elevenMeterAfrican/11mafrbasin1000px.png" },
    { url: "/imgs/stars/elevenMeterAfrican/11mafrbed1000px.png" },
    { url: "/imgs/stars/nineMeterAfrican/9mafrbasin1000px.png" },
    { url: "/imgs/stars/nineMeterAfrican/9mafrbed1000px.png" },
    { url: "/imgs/doubles/doublebedanddesk1000px.png" },
    { url: "/imgs/doubles/doublelarge1000px.png" },
    { url: "/imgs/makeup/muplarge1000px.png" },
    { url: "/imgs/production/prodlarge1000pxfixed.png" },
  ];

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
      <div role="presentation" className={scrollIndicator}></div>
      {carouselImages.map(({ url }, elementIndex) => {
        return (
          <Image
            className={`${carouselImage} ${
              elementIndex === carouselIndex ? showImage : ""
            }`}
            key={url}
            src={url}
            alt=""
            layout="fill"
            priority="true"
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
