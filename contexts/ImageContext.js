import { useState, createContext } from "react";

// # Carousel
import nineMtrAfrBasin from "../public/imgs/stars/nineMeterAfrican/9mafrbasin1000px.png";
import nineMtrAfrBed from "../public/imgs/stars/nineMeterAfrican/9mafrbed1000px.png";
import elevenMtrAfrBasin from "../public/imgs/stars/elevenMeterAfrican/11mafrbasin1000px.png";
import elevenMtrAfrBed from "../public/imgs/stars/elevenMeterAfrican/11mafrbed1000px.png";
import doubleBedAndDesk from "../public/imgs/doubles/doublebedanddesk1000px.png";
import doubleLarge from "../public/imgs/doubles/doublelarge1000px.png";
import mUpLarge from "../public/imgs/makeup/muplarge1000px.png";
import prodLarge from "../public/imgs/production/prodlarge1000pxfixed.png";
import p9mAfrBasin from "../public/imgs/stars/nineMeterAfrican/9mafrbasin1000px.png";
import p9mAfrBed from "../public/imgs/stars/nineMeterAfrican/9mafrbed1000px.png";
import p9mAfrBed2 from "../public/imgs/stars/nineMeterAfrican/9mafrbed2-1000px.png";
import p9mAfrKitchen from "../public/imgs/stars/nineMeterAfrican/9mafrkitchen1000px.png";
import p9mAfrKitchen2 from "../public/imgs/stars/nineMeterAfrican/9mafrkitchenandtv1000px.png";
import p9mAfrLounge from "../public/imgs/stars/nineMeterAfrican/9mafrlounge1000px.png";
import p9mAfrShower from "../public/imgs/stars/nineMeterAfrican/9mafrshower1000px.png";
import p9mAfrShowerAndMonitor from "../public/imgs/stars/nineMeterAfrican/9mafrshowerandmonitor1000px.png";
import p9mAfrTable from "../public/imgs/stars/nineMeterAfrican/9mafrtable1000px.png";

// # Doubles

import doubleLrg from "../public/imgs/doubles/doublelarge1000px.png";
import dbl2 from "../public/imgs/doubles/double2.png";
import dblBedAndDesk from "../public/imgs/doubles/doublebedanddesk1000px.png";
import dblBedAndToilet from "../public/imgs/doubles/doublebedandtoilet.png";
import toilet from "../public/imgs/doubles/toilet.png";
import fullRoom from "../public/imgs/doubles/_DSC0059fixed.png";

// # Triples

import triple from "../public/imgs/triples/TB/Last-Triple-image.png";
import triple2 from "../public/imgs/triples/TB/_DSC0066.JPG";

// # Production

import prod from "../public/imgs/production/prodlarge1000pxfixed.png";
import prod2 from "../public/imgs/production/_DSC0135.JPG";
import prod3 from "../public/imgs/production/_DSC0109.JPG";

// # Make-up

import makeUp from "../public/imgs/makeup/muplarge1000px.png";
import makeUp2 from "../public/imgs/makeup/_DSC0090.JPG";
import makeUp3 from "../public/imgs/makeup/_DSC0084.JPG";
import makeUp4 from "../public/imgs/makeup/_DSC0083.JPG";

export const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [imgs, setImgs] = useState({
    carouselImages: [
      {
        src: nineMtrAfrBasin,
        alt: "",
      },
      {
        src: nineMtrAfrBed,
        alt: "",
      },
      {
        src: elevenMtrAfrBasin,
        alt: "",
      },
      {
        src: elevenMtrAfrBed,
        alt: "",
      },
      {
        src: doubleBedAndDesk,
        alt: "",
      },
      {
        src: doubleLarge,
        alt: "",
      },
      {
        src: mUpLarge,
        alt: "",
      },
      {
        src: prodLarge,
        alt: "",
      },
    ],
    stars: [
      {
        src: p9mAfrBasin,
        alt: "",
      },
      {
        src: p9mAfrBed,
        alt: "",
      },
      {
        src: p9mAfrBed2,
        alt: "",
      },
      {
        src: p9mAfrKitchen,
        alt: "",
      },
      {
        src: p9mAfrKitchen2,
        alt: "",
      },
      {
        src: p9mAfrLounge,
        alt: "",
      },
      {
        src: p9mAfrShower,
        alt: "",
      },
      {
        src: p9mAfrShowerAndMonitor,
        alt: "",
      },
      {
        src: p9mAfrTable,
        alt: "",
      },
    ],
    doubles: [
      {
        src: doubleLrg,
        alt: "",
      },
      {
        src: dbl2,
        alt: "",
      },
      {
        src: dblBedAndDesk,
        alt: "",
      },
      {
        src: dblBedAndToilet,
        alt: "",
      },
      {
        src: toilet,
        alt: "",
      },
      {
        src: fullRoom,
        alt: "",
      },
    ],
    triples: [
      {
        src: triple,
        alt: "",
      },
      {
        src: triple2,
        alt: "",
      },
      {
        src: fullRoom,
        alt: "",
      },
    ],
    production: [
      {
        src: prod,
        alt: "",
      },
      {
        src: prod2,
        alt: "",
      },
      {
        src: prod3,
        alt: "",
      },
    ],
    makeup: [
      {
        src: makeUp,
        alt: "",
      },
      {
        src: makeUp2,
        alt: "",
      },
      {
        src: makeUp3,
        alt: "",
      },
      {
        src: makeUp4,
        alt: "",
      },
    ],
  });

  return (
    <ImageContext.Provider value={{ imgs }}>{children}</ImageContext.Provider>
  );
};

export default ImageContextProvider;
