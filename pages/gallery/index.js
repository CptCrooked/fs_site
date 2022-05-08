import { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import {
  gallery_container,
  image_wrapper,
  image_caption,
  carousel_info,
} from "./Carousel.module.scss";
import { showImage } from "../../components/Carousel/Carousel.module.scss";
import { ImageContext } from "../../contexts/ImageContext";
import trailerData from "../../galleryData/galleryData";
import CustomControls from "../../components/CustomControls/CustomControls";

const Gallery = () => {
  const { imgs } = useContext(ImageContext);
  const [index, setIndex] = useState(0);
  const [currentImageArr, setCurrentImageArr] = useState(imgs.carouselImages);
  const selectRefValue = useRef(null);
  const galleryContainerRef = useRef(null);

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

  useEffect(() => {
    let shown;
    [...galleryContainerRef.current.children].forEach((figureEl) => {
      if (figureEl.children[0].children[0].classList.value.length > 1) {
        console.dir(`HAS class`);
        console.dir(figureEl.children[0].children[0].classList);
        shown = true;
      } else if (
        figureEl.children[0].children[0].classList.value.length === 0
      ) {
        console.dir(`DOESN'T HAVE class`);
        console.dir(figureEl.children[0].children[0].classList);
      }
    });
    console.log(`selectRefValue.current:`, selectRefValue.current);
    console.log(`Shown:`, shown);
  }, [currentImageArr]);

  return (
    <section>
      <div className={gallery_container} ref={galleryContainerRef}>
        {currentImageArr.map((imgObj, i) => {
          return (
            <figure className={image_wrapper} key={`${imgObj.src}${i}`}>
              <Image
                src={imgObj.src}
                alt={imgObj.alt}
                layout="fill"
                className={i === index ? showImage : ""}
                priority={i < 3 ? "true" : "false"}
              />
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
      {/* <p className={carousel_info}>
        This trailer imported from USA has sides that &ldquo;pop-out&ldquo; to
        create ample space. The trailer has a bedroom, en suite bathroom, ample
        cupboards, a kitchen, a dining room, a spacious lounge and
        air-conditioning throughout. For entertainment, there is a 36&ldquo;
        Plasma TV, a DVD/CD player.
      </p> */}
    </section>
  );
};

export default Gallery;
