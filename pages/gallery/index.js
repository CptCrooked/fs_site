import Image from "next/image";
import {
  gallery_container,
  image_wrapper,
  image_caption,
  carousel_controls,
} from "./Carousel.module.scss";
import star11mImg1 from "/public/imgs/stars/elevenMeterAfrican/11mafrbasin1000px.png";
import star11mImg2 from "/public/imgs/stars/elevenMeterAfrican/11mafrbed1000px.png";
import star9mImg1 from "/public/imgs/stars/nineMeterAfrican/9mafrbed1000px.png";
import star9mImg2 from "/public/imgs/stars/nineMeterAfrican/9mafrkitchen1000px.png";
import star9mPO1 from "/public/imgs/stars/nineMeterPO/9mpocouch1000px.png";
import star9mPO2 from "/public/imgs/stars/nineMeterPO/9mpokitchen2-1000px.png";
import star11mPO1 from "/public/imgs/stars/elevenMeterPO/11mpolounge.png";
import star11mPO2 from "/public/imgs/stars/elevenMeterPO/11mpostarbed.png";
import afrdbl1 from "/public/imgs/doubles/doublebedanddesk1000px.png";
import afrdbl2 from "/public/imgs/doubles/doublelarge1000px.png";
import mup1 from "/public/imgs/makeup/muplarge1000px.png";
import prod1 from "/public/imgs/production/prodlarge1000pxfixed.png";

const imgs = {
  carousel: [
    { ...star11mImg1, alt: "Test" },
    { ...star11mImg2, alt: "Test" },
    { ...star9mImg1, alt: "Test" },
    { ...star9mImg2, alt: "Test" },
    { ...star9mPO1, alt: "Test" },
    { ...star9mPO2, alt: "Test" },
    { ...star11mPO1, alt: "Test" },
    { ...star11mPO2, alt: "Test" },
    { ...afrdbl1, alt: "Test" },
    { ...afrdbl2, alt: "Test" },
    { ...mup1, alt: "Test" },
    { ...prod1, alt: "Test" },
  ],
};

const Gallery = () => {
  return (
    <section>
      <div className={gallery_container}>
        {imgs.carousel.map((imgObj, i) => {
          console.dir(imgObj);
          const key = () => Math.random() * 100 * i;
          return (
            <figure className={image_wrapper} key={key()}>
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
