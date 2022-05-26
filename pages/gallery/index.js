import { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { carouselContainer } from "../../components/Carousel/Carousel.module.scss";
import {
  gallery_imgAndControls,
  gallery_container,
  image_wrapper,
  image_caption,
  image_label,
} from "./Carousel.module.scss";
import { showImage } from "../../components/Carousel/Carousel.module.scss";
import { ImageContext } from "../../contexts/ImageContext";
import trailerData from "../../galleryData/galleryData";
import CustomControls from "../../components/CustomControls/CustomControls";
import ContactInfo from "../../components/Contact/ContactInfo/ContactInfo";
import Contact from "../../components/Contact/Contact";

const Gallery = () => {
  const { imgs } = useContext(ImageContext);
  const [index, setIndex] = useState(0);
  const [currentImageArr, setCurrentImageArr] = useState(imgs.carouselImages);
  const selectRefValue = useRef(null);
  const galleryContainerRef = useRef(null);
  const showImageRef = useRef();

  const forward = (arr) => {
    if (index < arr.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setIndex(0);
    }
  };

  const back = (arr) => {
    if (index > 0) {
      setIndex((index) => index - 1);
    } else {
      setIndex(parseInt(arr.length - 1));
    }
  };

  const handleUnitChange = (e) => {
    selectRefValue.current = e.target.value;
    setCurrentImageArr(imgs[`${selectRefValue.current}`]);
  };

  // Checks the nested image in the next image wrapper for the 'showImage' class
  // and applies it to the first image in the array.
  useEffect(() => {
    const galleryChildren = [...galleryContainerRef.current.children];
    showImageRef.current = setTimeout(() => {
      const shown = galleryChildren.filter(
        (figureEl) =>
          figureEl.children[0].children[0].classList.value.length > 1
      );
      if (shown.length !== 1) {
        galleryChildren[0].children[0].children[0].classList.add(showImage);
      }
    }, 0);
    // AGAIN Checks the nested image in the next image wrapper for the 'showImage' class
    // and applies it to the first image in the array.
    return () => {
      const shown = galleryChildren.filter(
        (figureEl) =>
          figureEl.children[0].children[0].classList.value.length > 1
      );
      if (shown.length !== 1) {
        galleryChildren[0].children[0].children[0].classList.add(showImage);
      }
      clearTimeout(showImageRef.current);
    };
  });

  return (
    <section>
      <div className={gallery_imgAndControls}>
        <div className={gallery_container} ref={galleryContainerRef}>
          {currentImageArr.map((imgObj, i) => {
            const shownIndex = i === index ? showImage : "";
            return (
              <figure className={image_wrapper} key={`${imgObj.src}${i}`}>
                <Image
                  src={imgObj.src}
                  alt={imgObj.alt}
                  layout="fill"
                  // objectFit="contain"
                  className={shownIndex}
                  priority={i < 3 ? "true" : "false"}
                />
                <span
                  className={
                    i === index
                      ? `${image_label} ${showImage}`
                      : `${image_label}`
                  }
                >
                  {imgObj.type}
                </span>
                <figcaption className={image_caption}>{imgObj.alt}</figcaption>
              </figure>
            );
          })}
        </div>
        <CustomControls
          trailerData={trailerData}
          currentArr={currentImageArr}
          handleUnitChange={handleUnitChange}
          fns={{ forward, back }}
          selectRefValue={selectRefValue}
        />
      </div>
      <Contact />
    </section>
  );
};

export default Gallery;
