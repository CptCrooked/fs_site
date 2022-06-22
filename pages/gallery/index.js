import { useState, useContext, useEffect, useRef } from "react";
import Image from "next/image";

import { ImageContext } from "../../contexts/ImageContext";
import trailerData from "../../galleryData/galleryData";
import Showcase from "../../components/Showcase/Showcase";

const Gallery = () => {
  return <Showcase />;
};

export default Gallery;
