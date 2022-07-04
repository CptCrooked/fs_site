import { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";

import { ImageContext } from "../../contexts/ImageContext";
import trailerData from "../../galleryData/galleryData";
import Showcase from "../../components/Showcase/Showcase";
import Showcase2 from "../../dev/Showcase2";

const Gallery = () => {
  return <Showcase2 />;
};

export default Gallery;
