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
  //! The state below is for when a user changes the type of
  //! trailer that they would like to view.
  //! Currently, the select element flashes and it has to do
  //! with the fact that the value on the select is tied to
  //! a ref which only updates on
  const [currentArr, setCurrentArr] = useState([]);
  const [index, setIndex] = useState(0);
  const imageContainer = useRef(null);
  const figureArray = useRef(null);
  const selectValueRef = useRef();
  const timeoutRef = useRef();
  const animatedGalleryCover = useRef(null);
  const galleryCoverTimeoutRef = useRef();
  const numOfRendersRef = useRef(0);
  const selectElementRef = useRef(null);
  const selectTextRef = useRef(null);

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

  const returnAllFigureEls = () =>
    [...imageContainer.current.children].filter(
      (child) => child.tagName === "FIGURE"
    );

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
        animatedGalleryCover.current.classList.remove(selectChangeAnimation);
      }, timeout));
    }
  };

  const delayedArrayChange = (timeout = 1000) => {
    timeoutRef.current = setTimeout(() => {
      if (selectValueRef.current !== "carouselImages") {
        setCurrentArr(imgs[selectValueRef.current]);
      } else {
        setCurrentArr(imgs.carouselImages);
      }
    }, timeout);
  };

  const changeCurrentArray = (e) => {
    if (e.target.value === selectValueRef.current) return;
    animatedGalleryCover.current.classList.add(selectChangeAnimation);
    selectValueRef.current = e.target.value;
    delayedArrayChange(500);
  };

  useEffect(() => {
    animatedGalleryCover.current.classList.add(selectChangeAnimation);
    selectValueRef.current = "carouselImages";
    numOfRendersRef.current = numOfRendersRef.current++;
    delayedArrayChange(500);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(numOfRendersRef.current);
    figureArray.current = returnAllFigureEls();
    if (numOfRendersRef.current > 2) {
      console.log(selectValueRef.current);
      if (selectValueRef.current !== "carouselImages") {
        // selectElementRef.current.value = selectValueRef.current;
        selectTextRef.current.setAttribute(
          "data-select-text",
          selectValueRef.current
        );
      }
      removeGalleryCover();
      delayedArrayChange(500);
      numOfRendersRef.current = numOfRendersRef.current++;
    } else {
      removeGalleryCover(1000);
    }
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
      <div
        className={`${showcase_controls}`}
        ref={selectTextRef}
        data-select-text=""
      >
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
          ref={selectElementRef}
          defaultValue="Choose Unit"
        >
          <option value="Choose Unit" disabled={true}>
            Choose Unit
          </option>
          {trailerData.map((trailerType) => {
            return (
              <option
                key={uuidv4()}
                value={trailerType.type}
                onClick={() => console.log("hello")}
              >
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
