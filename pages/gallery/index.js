import { useContext, useEffect } from "react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import {
  gallery_container,
  image_wrapper,
  image_caption,
  carousel_controls,
} from "./Carousel.module.scss";
import { ImageContext } from "../../contexts/ImageContext";

const Gallery = () => {
  const { imgs } = useContext(ImageContext);

  useEffect(() => {
    console.log(imgs);
  }, []);

  return (
    <section>
      <div className={gallery_container}>
        {imgs.carouselImages.map((imgObj, i) => {
          return (
            <figure className={image_wrapper} key={uuid()}>
              <Image src={imgObj.src} alt={imgObj.alt} layout="fill" />
              <figcaption className={image_caption}>{imgObj.alt}</figcaption>
            </figure>
          );
        })}
      </div>
      <div className={carousel_controls}>
        <button>{`<`}</button>
        <button>Menu</button>
        <button>F/S</button>
        <button>{`>`}</button>
      </div>
    </section>
  );
};

export default Gallery;
