import { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import { ImageContext } from "../../contexts/ImageContext";
import {
  showcase_container,
  img_container,
  showcase_controls,
  changeImageButton,
  selectChangeAnimation,
} from "./Showcase.module.scss";
import trailerData from "../../galleryData/galleryData";
import { v4 as uuidv4 } from "uuid";

const Showcase2 = () => {
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

  const setSelectText = (rawText) => {
    //. Sets the text in the "showcase controls" ::after pseudo element.  '
    //. Prevents the select's "flashing". Changes a ref (No re-render)/   '
    const firstLetter = rawText.slice(0, 1).toUpperCase();
    const rest = rawText.slice(1);
    const text = `${firstLetter}${rest}`;
    selectTextRef.current.setAttribute("data-select-text", text);
  };

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
    if (index > currentArr.length - 1 || index < 0) {
      setIndex(0);
    }
    if (animatedGalleryCover?.current === null) return;
    if (animatedGalleryCover?.current.classList.length > 0) {
      timeoutRef.current = setTimeout(() => {
        animatedGalleryCover.current.classList.remove(selectChangeAnimation);
      }, timeout);
    }
  };

  const delayedArrayChange = (e, timeout = 0) => {
    //. Allows delay for animations to finish
    //. part or all movement before rerender. (Event loop)
    timeoutRef.current = setTimeout(() => {
      if (e && e.target.value !== STR_INITIAL_ARRAY_STRING) {
        setSelectText(selectPrevValueRef.current);
        //. Changes state (re-render)
        setCurrentArr(imgs[e.target.value]);
      } else {
        setSelectText(STR_INITIAL_ARRAY_STRING);
        //. Changes state (re-render)
        setCurrentArr(imgs[STR_INITIAL_ARRAY_STRING]);
      }
    }, timeout);
  };

  const changeCurrentArray = (e) => {
    //. This fn fires on an <option>'s click event as there
    //. was an issue with the first option.
    //. (It would not allow being selected after the first state change)
    if (e.target.value === selectPrevValueRef.current) return;
    animatedGalleryCover.current.classList.add(selectChangeAnimation);
    selectPrevValueRef.current = e.target.value;
    delayedArrayChange(e, 500);
  };

  useEffect(() => {
    delayedArrayChange();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    figureArray.current = returnAllFigureEls();
    removeGalleryCover(0);
    return () => {
      removeGalleryCover(0);
      clearTimeout(timeoutRef.current);
    };
  });

  return (
    <section className={showcase_container}>
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
          defaultValue={STR_INITIAL_ARRAY_STRING}
        >
          <option value={STR_INITIAL_ARRAY_STRING} disabled={true}>
            Choose Unit
          </option>
          {trailerData.map((trailerType) => {
            return (
              <option
                key={uuidv4()}
                value={trailerType.type}
                onClick={(e) => changeCurrentArray(e)}
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
    </section>
  );
};

export default Showcase2;
