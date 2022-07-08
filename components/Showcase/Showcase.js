import { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import { ImageContext } from "../../contexts/ImageContext";
import {
  showcase_container,
  controls_wrapper_for_large_screens,
  img_container,
  showcase_controls,
  changeImageButton,
  selectChangeAnimation,
} from "./Showcase.module.scss";
import trailerData from "../../galleryData/galleryData";
import { v4 as uuidv4 } from "uuid";

const Showcase = () => {
  const { imgs } = useContext(ImageContext);
  //. The state below is for when a user changes the type of                '
  //. trailer that they would like to view.                                 '
  //. Currently, the select element flashes do to the fact                  '
  //. that the value on the select is tied to a ref which only updates on   '
  const [currentArr, setCurrentArr] = useState([]);
  const [index, setIndex] = useState(0);
  const imageContainer = useRef(null);
  const figureArray = useRef(null);
  const timeoutRef = useRef();
  const animatedGalleryCover = useRef(null);
  const selectElementRef = useRef(null);
  const selectTextRef = useRef(null);
  const selectPrevValueRef = useRef();

  const STR_INITIAL_ARRAY_STRING = "Choose Unit";

  //. 1) Remove class of currently rendered image                           '
  //. 2) Depending on the 'direction' of the change, add the "showImage"    '
  //.    class to the image to be viewed in the next render                 '
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

  //. Cycle forward through currentImageArr
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

  //. Cycle back through currentImageArr
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
    console.log(`Remove cover`);
    if (index > currentArr.length - 1 || index < 0) {
      setIndex(0);
    }
    if (animatedGalleryCover.current === null) return;
    if (animatedGalleryCover?.current.classList.length > 0) {
      timeoutRef.current = setTimeout(() => {
        animatedGalleryCover.current.classList.remove(selectChangeAnimation);
      }, timeout);
    }
  };

  const setSelectText = (rawText) => {
    //. Sets the text in the "showcase controls" ::after pseudo element.  '
    //. Prevents the select's "flashing". Changes a ref (No re-render)    '
    const firstLetter = rawText.slice(0, 1).toUpperCase();
    const rest = rawText.slice(1);
    const text = `${firstLetter}${rest}`;
    selectTextRef.current.setAttribute("data-select-text", text);
  };

  const delayedArrayChange = (key = STR_INITIAL_ARRAY_STRING, timeout = 0) => {
    if (key === `${selectPrevValueRef.current}`) return;
    animatedGalleryCover.current.classList.add(selectChangeAnimation);
    timeoutRef.current = setTimeout(() => {
      setCurrentArr(imgs[key]);
    }, timeout);
  };

  useEffect(() => {
    delayedArrayChange(STR_INITIAL_ARRAY_STRING, 500);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    figureArray.current = returnAllFigureEls();
    removeGalleryCover(500);
    return () => {
      removeGalleryCover(500);
      clearTimeout(timeoutRef.current);
    };
  });

  return (
    <section className={showcase_container}>
      <div className={controls_wrapper_for_large_screens}>
        <div className={img_container} ref={imageContainer}>
          <div
            role="presentation"
            ref={animatedGalleryCover}
            className={selectChangeAnimation}
          ></div>
          {[...currentArr].map(({ src, alt, width, height, type }, i) => {
            const newId = `${Math.random() * i}-${Date.now()}`;
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
        {/* Controls for gallery */}
        <div
          className={`${showcase_controls}`}
          ref={selectTextRef}
          data-select-text=""
        >
          <button
            className={`${changeImageButton}`}
            data-btn-type="back"
            onClick={() => prevImage(currentArr)}
          >
            <div></div>
          </button>
          <select
            name="type"
            id="trailerSelect"
            ref={selectElementRef}
            onChange={(e) => {
              setSelectText(e.target.value);
              delayedArrayChange(e.target.value, 500);
            }}
          >
            <option value="" aria-disabled="true">
              Choose Unit
            </option>
            {trailerData.map((trailerType) => {
              return (
                <option
                  key={uuidv4()}
                  value={trailerType.type}
                  onClick={(e) => {
                    selectPrevValueRef.current = e.target.value;
                  }}
                >
                  {trailerType.label}
                </option>
              );
            })}
          </select>
          <button
            className={`${changeImageButton}`}
            data-btn-type="next"
            onClick={() => nextImage(currentArr)}
          >
            <div></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
