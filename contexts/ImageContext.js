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
import triple1 from "../public/imgs/triples/TB/_DSC0074.JPG";
import triple2 from "../public/imgs/triples/TB/_DSC0066.JPG";
import triple3 from "../public/imgs/triples/TB/afrtrpl1.JPG";
import triple4 from "../public/imgs/triples/TB/afrtrpl2.JPG";
import triple5 from "../public/imgs/triples/TB/afrtrpl3.JPG";

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
        alt: "Interior of 9 meter standard star trailer",
        height: 667,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr9mBed,
        alt: "Interior of 9 meter standard star trailer",
        height: 667,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr11mBasin,
        alt: "Interior of 11 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: afr11mBed,
        alt: "Interior of 11 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: doubleBedAndDesk,
        alt: "Interior of an standard double banger trailer",
        height: 667,
        width: 1000,
        type: "Standard Double",
      },
      {
        src: doubleLarge,
        alt: "Interior of an standard double banger trailer",
        height: 669,
        width: 1000,
        type: "Standard Double",
      },
      {
        src: mUpLarge,
        alt: "Interior of Make up trailer",
        height: 669,
        width: 1000,
        type: "12m Make Up",
      },
      {
        src: prodLarge,
        alt: "Interior of production trailer",
        height: 669,
        width: 1000,
        type: "12m Production",
      },
    ],
    stars: [
      {
        src: afr9mBasin,
        alt: "Interior of 9 meter standard star trailer",
        height: 667,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr9mBed,
        alt: "Interior of 9 meter standard star trailer",
        height: 667,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr9mBed2,
        alt: "Interior of 9 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr9mKitchen,
        alt: "Interior of 9 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr9mKitchen2,
        alt: "Interior of 9 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr9mLounge,
        alt: "Interior of 9 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr9mShower,
        alt: "Interior of 9 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr9mShowerAndMonitor,
        alt: "Interior of 9 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr9mTable,
        alt: "Interior of 9 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "9m Standard",
      },
      {
        src: afr11mBasin,
        alt: "Interior of 11 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: afr11mbathroom,
        alt: "Interior of 11 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: afr11mbedAndToilet,
        alt: "Interior of 11 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: afr11mKitchen,
        alt: "Interior of 11 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: afr11mKitchenAndTable,
        alt: "Interior of 11 meter standard star trailer",
        height: 667,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: afr11mLounge,
        alt: "Interior of 11 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: afr11mLounge2,
        alt: "Interior of 11 meter standard star trailer",
        height: 667,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: afr11mTable,
        alt: "Interior of 11 meter standard star trailer",
        height: 666,
        width: 1000,
        type: "11m Standard",
      },
      {
        src: pO9mCouch,
        alt: "Interior of Pop-out star trailer",
        height: 666,
        width: 1000,
        type: "Pop-Out",
      },
      {
        src: pO9mKitchen,
        alt: "Interior of Pop-out star trailer",
        height: 666,
        width: 1000,
        type: "Pop-Out",
      },
      {
        src: pO9mKitchen2,
        alt: "Interior of Pop-out star trailer",
        height: 666,
        width: 1000,
        type: "Pop-Out",
      },
      {
        src: pO11mLounge,
        alt: "Interior of Pop-out star trailer",
        height: 479,
        width: 719,
        type: "Pop-Out",
      },
      {
        src: pO11mbed,
        alt: "Interior of Pop-out star trailer",
        height: 839,
        width: 1259,
        type: "Pop-Out",
      },
      {
        src: pO11mkitchen,
        alt: "Interior of Pop-out star trailer",
        height: 839,
        width: 1259,
        type: "Pop-Out",
      },
      {
        src: pO11mshower,
        alt: "Interior of Pop-out star trailer",
        height: 839,
        width: 1259,
        type: "Pop-Out",
      },
    ],
    doubles: [
      {
        src: doubleLarge,
        alt: "Interior of an standard double banger trailer",
        height: 669,
        width: 1000,
        type: "Standard Double",
      },
      {
        src: dblRoom,
        alt: "Interior of an standard double banger trailer",
        height: 839,
        width: 1259,
        type: "Standard Double",
      },
      {
        src: doubleBedAndDesk,
        alt: "Interior of an standard double banger trailer",
        height: 667,
        width: 1000,
        type: "Standard Double",
      },
      {
        src: dblBedAndToilet,
        alt: "Interior of an standard double banger trailer",
        height: 839,
        width: 1259,
        type: "Standard Double",
      },
      {
        src: toilet,
        alt: "Interior of an standard double banger trailer",
        height: 839,
        width: 1259,
        type: "Standard Double",
      },
      {
        src: fullRoom,
        alt: "Interior of an standard double banger trailer",
        height: 2592,
        width: 3872,
        type: "Standard Double",
      },
      {
        src: fullRoomSideOn,
        alt: "Interior of an standard double banger trailer",
        height: 2404,
        width: 3315,
        type: "Standard Double",
      },
      {
        src: dblRoofImg,
        alt: "Interior of an standard double banger trailer",
        height: 3264,
        width: 2448,
        type: "Standard Double",
      },
      {
        src: dblDayBed,
        alt: "Interior of an standard double banger trailer",
        height: 1836,
        width: 3264,
        type: "Standard Double",
      },
      {
        src: dblFromBed,
        alt: "Interior of an standard double banger trailer",
        height: 2592,
        width: 3872,
        type: "Standard Double",
      },
      {
        src: dblLightsOn,
        alt: "Interior of an standard double banger trailer",
        height: 1836,
        width: 3264,
        type: "Standard Double",
      },
      {
        src: dblLitForestWall,
        alt: "Interior of an standard double banger trailer",
        height: 3264,
        width: 2448,
        type: "Standard Double",
      },
      {
        src: dblOld,
        alt: "Interior of an standard double banger trailer",
        height: 839,
        width: 1259,
        type: "Standard Double",
      },
      {
        src: dblLight,
        alt: "Interior of an standard double banger trailer",
        height: 3264,
        width: 1836,
        type: "Standard Double",
      },
    ],
    triples: [
      {
        src: triple,
        alt: "Interior of a standard triple banger trailer",
        height: 3872,
        width: 6062,
        type: "Standard Triple (1)",
      },
      {
        src: triple1,
        alt: "Interior of a standard triple banger trailer",
        height: 3872,
        width: 2399,
        type: "Standard Triple (2)",
      },
      {
        src: triple2,
        alt: "Interior of a standard triple banger trailer",
        height: 3872,
        width: 2352,
        type: "Standard Triple (3)",
      },
      {
        src: triple3,
        alt: "Interior of a standard triple banger trailer",
        height: 3327,
        width: 2399,
        type: "Standard Triple (4)",
      },
      {
        src: triple4,
        alt: "Interior of a standard triple banger trailer",
        height: 3324,
        width: 2225,
        type: "Standard Triple (5)",
      },
      {
        src: triple5,
        alt: "Interior of a standard triple banger trailer",
        height: 3264,
        width: 2320,
        type: "Standard Triple (6)",
      },
      {
        src: triple6,
        alt: "Interior of a standard triple banger trailer",
        height: 2560,
        width: 1184,
        type: "Standard Triple (7)",
      },
      {
        src: triple7,
        alt: "Interior of a standard triple banger trailer",
        height: 2560,
        width: 1184,
        type: "Standard Triple (8)",
      },
      {
        src: triple8,
        alt: "Interior of a standard triple banger trailer",
        height: 2560,
        width: 1184,
        type: "Standard Triple (9)",
      },
      {
        src: triple9,
        alt: "Interior of a standard triple banger trailer",
        height: 2560,
        width: 1184,
        type: "Standard Triple (10)",
      },
      {
        src: triple10,
        alt: "Interior of a standard triple banger trailer",
        height: 2560,
        width: 1184,
        type: "Standard Triple (12)",
      },
      {
        src: triple11,
        alt: "Interior of a standard triple banger trailer",
        height: 2560,
        width: 1184,
        type: "Standard Triple (13)",
      },
      {
        src: triple12,
        alt: "Interior of a standard triple banger trailer",
        height: 2560,
        width: 1184,
        type: "Standard Triple (14)",
      },
      {
        src: triple13,
        alt: "Interior of a standard triple banger trailer",
        height: 4128,
        width: 1908,
        type: "Standard Triple (15)",
      },
      {
        src: triple14,
        alt: "Interior of a standard triple banger trailer",
        height: 4128,
        width: 1908,
        type: "Standard Triple (16)",
      },
    ],
    production: [
      {
        src: prodLarge,
        alt: "Interior of production trailer",
        height: 669,
        width: 1000,
        type: "Production (1)",
      },
      {
        src: prod2,
        alt: "Interior of production trailer",
        height: 2484,
        width: 3711,
        type: "Production (2)",
      },
      {
        src: prod3,
        alt: "Interior of production trailer",
        height: 2517,
        width: 3760,
        type: "Production (3)",
      },
    ],
    makeup: [
      {
        src: mUpLarge,
        alt: "Interior of Make up trailer",
        height: 669,
        width: 1000,
        type: "Make-Up (1)",
      },
      {
        src: makeUp2,
        alt: "Interior of Make up trailer",
        height: 3872,
        width: 2592,
        type: "Make-Up (2)",
      },
      {
        src: makeUp3,
        alt: "Interior of Make up trailer",
        height: 3443,
        width: 2540,
        type: "Make-Up (3)",
      },
      {
        src: makeUp4,
        alt: "Interior of Make up trailer",
        height: 2592,
        width: 3177,
        type: "Make-Up (4)",
      },
    ],
  });

  return (
    <ImageContext.Provider value={{ imgs }}>{children}</ImageContext.Provider>
  );
};

export default ImageContextProvider;
