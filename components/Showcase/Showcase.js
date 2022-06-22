import { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import { ImageContext } from "../../contexts/ImageContext";
import {
  showcase_container,
  img_container,
  showcase_controls,
  changeImageButton,
  nextButton,
  previousButton,
  selectChangeAnimation,
} from "./Showcase.module.scss";
import trailerData from "../../galleryData/galleryData";
import { v4 as uuidv4 } from "uuid";

const Showcase = () => {
  const { imgs } = useContext(ImageContext);
  const [index, setIndex] = useState(0);
  const [currentArr, setCurrentArr] = useState([]);
  const imageContainer = useRef(null);
  const figureArray = useRef(null);
  const selectValueRef = useRef();
  const timeoutRef = useRef();
  const animatedGalleryCover = useRef(null);
  const galleryCoverTimeoutRef = useRef();

  const changeImageFn = (array, action) => {
    figureArray.current[index].classList.remove("showImage");

    switch (action) {
      case "next":
        if (index >= 0 && index < array.length - 1) {
          figureArray.current[index + 1].classList.add("showImage");
        } else if ((index = array.length - 1)) {
          figureArray.current[0].classList.add("showImage");
        }
        break;
      case "prev":
        if (index === 0) {
          figureArray.current[array.length - 1].classList.add("showImage");
        } else {
          figureArray.current[index - 1].classList.add("showImage");
        }
        break;
      default:
        break;
    }
  };

  // Cycle forward through currentImageArr
  const nextImage = (arr) => {
    changeImageFn(arr, "next");
    timeoutRef.current = setTimeout(() => {
      if (index < arr.length - 1) {
        setIndex((index) => index + 1);
      } else {
        setIndex(0);
      }
    }, 300);
  };

  // Cycle back through currentImageArr
  const prevImage = (arr) => {
    changeImageFn(arr, "prev");
    timeoutRef.current = setTimeout(() => {
      if (index > 0) {
        setIndex((index) => index - 1);
      } else {
        setIndex(parseInt(arr.length - 1));
      }
    }, 300);
  };

  const removeGalleryCover = (timeout = 0) => {
    if (index > currentArr.length - 1 || index < 0) {
      setIndex(0);
    }
    if (animatedGalleryCover.current.classList.length > 0) {
      return (galleryCoverTimeoutRef.current = setTimeout(() => {
        console.log(`running`);
        animatedGalleryCover.current.classList.remove(selectChangeAnimation);
      }, timeout));
    }
  };

  const changeCurrentArray = (e) => {
    animatedGalleryCover.current.classList.add(selectChangeAnimation);
    selectValueRef.current = e.target.value;
    timeoutRef.current = setTimeout(() => {
      setCurrentArr(imgs[`${selectValueRef.current}`]);
    }, 1000);
  };

  useEffect(() => {
    figureArray.current = [...imageContainer.current.children].filter(
      (child, i) => i !== 0
    );
    removeGalleryCover();
    timeoutRef.current = setTimeout(() => {
      if (selectValueRef.current) {
        setCurrentArr(imgs[selectValueRef.current]);
      } else {
        setCurrentArr(imgs.carouselImages);
      }
    }, 500);
    //eslint-disable-next-line
    return () => clearTimeout(timeoutRef.current);
  });

  return (
    <section className={showcase_container}>
      <div className={img_container} ref={imageContainer}>
        <div role="presentation" ref={animatedGalleryCover}></div>
        {[...currentArr].map(({ src, alt, width, height, type }, i) => {
          const newId = Math.random() * i;
          const showCurrentImage = () => (i === index ? "showImage" : "");
          return (
            <figure role="group" key={newId} className={showCurrentImage()}>
              <Image
                src={src}
                alt={alt}
                layout="fill"
                priority={true}
                objectFit={width > height ? `fill` : `contain`}
              />
              <figcaption>{type}</figcaption>
            </figure>
          );
        })}
      </div>
      <div className={`${showcase_controls}`}>
        <button
          className={`${changeImageButton} ${previousButton}`}
          data-btn-type="back"
          onClick={() => prevImage(currentArr)}
        >
          <div></div>
        </button>
        <select
          name="type"
          id="trailerSelect"
          onChange={(e) => changeCurrentArray(e)}
          value={selectValueRef.current}
          defaultValue=""
        >
          <option value="" disabled={true}>
            Choose Unit
          </option>
          {trailerData.map((trailerType, i) => {
            return (
              <option key={uuidv4()} value={trailerType.type}>
                {trailerType.label}
              </option>
            );
          })}
        </select>
        <button
          className={`${changeImageButton} ${nextButton}`}
          data-btn-type="next"
          onClick={() => nextImage(currentArr)}
        >
          <div></div>
        </button>
      </div>
    </section>
  );
};

export default Showcase;
