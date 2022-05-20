import { useState, createContext } from "react";

// # Carousel
import afr9mBasin from "../public/imgs/stars/nineMeterAfrican/9mafrbasin1000px.png";
import afr9mBed from "../public/imgs/stars/nineMeterAfrican/9mafrbed1000px.png";
import afr11mBasin from "../public/imgs/stars/elevenMeterAfrican/11mafrbasin1000px.png";
import afr11mBed from "../public/imgs/stars/elevenMeterAfrican/11mafrbed1000px.png";
import doubleBedAndDesk from "../public/imgs/doubles/doublebedanddesk1000px.png";
import doubleLarge from "../public/imgs/doubles/doublelarge1000px.png";
import mUpLarge from "../public/imgs/makeup/muplarge1000px.png";
import prodLarge from "../public/imgs/production/bighorn/prodlarge1000pxfixed.png";

// # Stars
// ? 9 Meter African
// Afr9mBasin - already imported in Carousel section
// Afr9mBed - already imported in Carousel section
import afr9mBed2 from "../public/imgs/stars/nineMeterAfrican/9mafrbed2-1000px.png";
import afr9mKitchen from "../public/imgs/stars/nineMeterAfrican/9mafrkitchen1000px.png";
import afr9mKitchen2 from "../public/imgs/stars/nineMeterAfrican/9mafrkitchenandtv1000px.png";
import afr9mLounge from "../public/imgs/stars/nineMeterAfrican/9mafrlounge1000px.png";
import afr9mShower from "../public/imgs/stars/nineMeterAfrican/9mafrshower1000px.png";
import afr9mShowerAndMonitor from "../public/imgs/stars/nineMeterAfrican/9mafrshowerandmonitor1000px.png";
import afr9mTable from "../public/imgs/stars/nineMeterAfrican/9mafrtable1000px.png";

//? 11 Meter African
// afr11mBasin - already imported in Carousel section
// afr11mBed - already imported in Carousel section
import afr11mbathroom from "../public/imgs/stars/elevenMeterAfrican/11mafrbedandshower1000px.png";
import afr11mbedAndToilet from "../public/imgs/stars/elevenMeterAfrican/11mafrbedandtoilet1000px.png";
import afr11mKitchen from "../public/imgs/stars/elevenMeterAfrican/11mafrkitchen1000px.png";
import afr11mKitchenAndTable from "../public/imgs/stars/elevenMeterAfrican/11mafrkitchenandtable1000px.png";
import afr11mLounge from "../public/imgs/stars/elevenMeterAfrican/11mafrlounge1000px.png";
import afr11mLounge2 from "../public/imgs/stars/elevenMeterAfrican/11mafrlounge2-1000px.png";
import afr11mTable from "../public/imgs/stars/elevenMeterAfrican/11mafrtable1000px.png";

// ? 9 Meter Pop Out
//! NEED PHOTOS!
import pO9mCouch from "../public/imgs/stars/nineMeterPO/9mpocouch1000px.png";
import pO9mKitchen from "../public/imgs/stars/nineMeterPO/9mpokitchen1000px.png";
import pO9mKitchen2 from "../public/imgs/stars/nineMeterPO/9mpokitchen2-1000px.png";

//? 11 Meter Pop-Out
//! NEED PHOTOS!
import pO11mLounge from "../public/imgs/stars/elevenMeterPO/11mpolounge.png";
import pO11mbed from "../public/imgs/stars/elevenMeterPO/11mpostarbed.png";
import pO11mkitchen from "../public/imgs/stars/elevenMeterPO/11mpostarkitchen.png";
import pO11mshower from "../public/imgs/stars/elevenMeterPO/11mpostarshower.png";

// # Doubles

// ? African Doubles
// doubleBedAndDesk - already imported in Carousel section
// doubleLarge - already imported in Carousel section
import dblRoom from "../public/imgs/doubles/double2.png";
import dblBedAndToilet from "../public/imgs/doubles/doublebedandtoilet.png";
import toilet from "../public/imgs/doubles/toilet.png";
import fullRoom from "../public/imgs/doubles/fromBed.png";
import fullRoomSideOn from "../public/imgs/doubles/sideOn.JPG";
import dblRoofImg from "../public/imgs/doubles/afrDbl.jpg";
import dblDayBed from "../public/imgs/doubles/afrDbl1.jpg";
import dblFromBed from "../public/imgs/doubles/afrDbl2.png";
import dblLightsOn from "../public/imgs/doubles/afrDbl3.jpg";
import dblLitForestWall from "../public/imgs/doubles/afrDbl4.jpg";
import dblOld from "../public/imgs/doubles/afrDbl5.png";
import dblLight from "../public/imgs/doubles/afrDblLight.jpg";

// ? Pop-out Doubles
//! NEED PHOTOS!

// # Triples

// ? African Triples
//! NEED PHOTOS!

import triple from "../public/imgs/triples/TB/Last-Triple-image.png";
import triple2 from "../public/imgs/triples/TB/_DSC0066.JPG";

// ? Pop-out triples
//! NEED PHOTOS!

// # Production
//! NEED PHOTOS!
// ? 13m Pop-Out

// prodLarge - already imported in Carousel section
import prod2 from "../public/imgs/production/bighorn/_DSC0135.JPG";
import prod3 from "../public/imgs/production/prod2/_DSC0109.JPG";

// # Make-up

// mUpLarge - already imported in Carousel section
import makeUp2 from "../public/imgs/makeup/_DSC0090.JPG";
import makeUp3 from "../public/imgs/makeup/_DSC0084.JPG";
import makeUp4 from "../public/imgs/makeup/_DSC0083.JPG";

// Total: 46

export const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [imgs, setImgs] = useState({
    carouselImages: [
      {
        src: afr9mBasin,
        alt: "",
        type: "9m African",
      },
      {
        src: afr9mBed,
        alt: "",
        type: "9m African",
      },
      {
        src: afr11mBasin,
        alt: "",
        type: "11m African",
      },
      {
        src: afr11mBed,
        alt: "",
        type: "11m African",
      },
      {
        src: doubleBedAndDesk,
        alt: "",
        type: "African Double",
      },
      {
        src: doubleLarge,
        alt: "",
        type: "African Double",
      },
      {
        src: mUpLarge,
        alt: "",
        type: "12?m Make Up",
      },
      {
        src: prodLarge,
        alt: "",
        type: "12?m Production",
      },
    ],
    stars: [
      {
        src: afr9mBasin,
        alt: "",
        type: "9m African",
      },
      {
        src: afr9mBed,
        alt: "",
        type: "9m African",
      },
      {
        src: afr9mBed2,
        alt: "",
        type: "9m African",
      },
      {
        src: afr9mKitchen,
        alt: "",
        type: "9m African",
      },
      {
        src: afr9mKitchen2,
        alt: "",
        type: "9m African",
      },
      {
        src: afr9mLounge,
        alt: "",
        type: "9m African",
      },
      {
        src: afr9mShower,
        alt: "",
        type: "9m African",
      },
      {
        src: afr9mShowerAndMonitor,
        alt: "",
        type: "9m African",
      },
      {
        src: afr9mTable,
        alt: "",
        type: "9m African",
      },
      {
        src: afr11mbathroom,
        alt: "",
        type: "11m African",
      },
      {
        src: afr11mbedAndToilet,
        alt: "",
        type: "11m African",
      },
      {
        src: afr11mKitchen,
        alt: "",
        type: "11m African",
      },
      {
        src: afr11mKitchenAndTable,
        alt: "",
        type: "11m African",
      },
      {
        src: afr11mLounge,
        alt: "",
        type: "11m African",
      },
      {
        src: afr11mLounge2,
        alt: "",
        type: "11m African",
      },
      {
        src: afr11mTable,
        alt: "",
        type: "11m African",
      },
      {
        src: pO9mCouch,
        alt: "",
        type: "9m Pop-Out",
      },
      {
        src: pO9mKitchen,
        alt: "",
        type: "9m Pop-Out",
      },
      {
        src: pO9mKitchen2,
        alt: "",
        type: "9m Pop-Out",
      },
      {
        src: pO11mLounge,
        alt: "",
        type: "11m Pop-Out",
      },
      {
        src: pO11mbed,
        alt: "",
        type: "11m Pop-Out",
      },
      {
        src: pO11mkitchen,
        alt: "",
        type: "11m Pop-Out",
      },
      {
        src: pO11mshower,
        alt: "",
        type: "11m Pop-Out",
      },
    ],
    doubles: [
      {
        src: doubleLarge,
        alt: "",
        type: "African Double",
      },
      {
        src: dblRoom,
        alt: "",
        type: "African Double",
      },
      {
        src: doubleBedAndDesk,
        alt: "",
        type: "African Double",
      },
      {
        src: dblBedAndToilet,
        alt: "",
        type: "African Double",
      },
      {
        src: toilet,
        alt: "",
        type: "African Double",
      },
      {
        src: fullRoom,
        alt: "",
        type: "African Double",
      },
      {
        src: fullRoomSideOn,
        alt: "",
        type: "African Double",
      },
      {
        src: dblRoofImg,
        alt: "",
        type: "African Double",
      },
      {
        src: dblDayBed,
        alt: "",
        type: "African Double",
      },
      {
        src: dblFromBed,
        alt: "",
        type: "African Double",
      },
      {
        src: dblLightsOn,
        alt: "",
        type: "African Double",
      },
      {
        src: dblLitForestWall,
        alt: "",
        type: "African Double",
      },
      {
        src: dblOld,
        alt: "",
        type: "African Double",
      },
      {
        src: dblLight,
        alt: "",
        type: "African Double",
      },
    ],
    triples: [
      {
        src: triple,
        alt: "",
        type: "African Triple1",
      },
      {
        src: triple2,
        alt: "",
        type: "African Triple2",
      },
      {
        src: triple,
        alt: "",
        type: "African Triple3",
      },
      {
        src: triple2,
        alt: "",
        type: "African Triple4",
      },
    ],
    production: [
      {
        src: prodLarge,
        alt: "",
        type: "Production Text",
      },
      {
        src: prod2,
        alt: "",
        type: "Production Text",
      },
      {
        src: prod3,
        alt: "",
        type: "Production Text",
      },
    ],
    makeup: [
      {
        src: mUpLarge,
        alt: "",
        type: "Make-Up Text",
      },
      {
        src: makeUp2,
        alt: "",
        type: "Make-Up Text",
      },
      {
        src: makeUp3,
        alt: "",
        type: "Make-Up Text",
      },
      {
        src: makeUp4,
        alt: "",
        type: "Make-Up Text",
      },
    ],
  });

  return (
    <ImageContext.Provider value={{ imgs }}>{children}</ImageContext.Provider>
  );
};

export default ImageContextProvider;
