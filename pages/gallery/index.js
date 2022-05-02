import { useState, useContext, useEffect } from "react";
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

  const forward = (arr) => {
    console.log(arr);
    if (index < arr.length - 1) {
      setIndex((index) => index + 1);
    } else {
      setIndex(0);
    }
  };

  const back = (arr) => {
    console.log(arr);
    if (index > 0) {
      setIndex((index) => index - 1);
    } else {
      setIndex(parseInt(arr.length - 1));
    }
  };

  useEffect(() => {
    console.log(trailerData);
  }, []);

  return (
    <section>
      <div className={gallery_container}>
        {imgs.carouselImages.map((imgObj, i) => {
          return (
            <figure className={image_wrapper} key={uuid()}>
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
        currentArr={imgs.carouselImages}
        fns={{ forward, back }}
      />
      <p className={carousel_info}>
        This trailer imported from USA has sides that "pop-out" to create ample
        space. The trailer has a bedroom, en suite bathroom, ample cupboards, a
        kitchen, a dining room, a spacious lounge and air-conditioning
        throughout. For entertainment, there is a 36" Plasma TV, a DVD/CD
        player.
      </p>
    </section>
  );
};

export default Gallery;
