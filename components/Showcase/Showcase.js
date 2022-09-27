import { useState, useEffect, useContext, useRef, useCallback } from "react";
import Image from "next/image";
import { ImageContext } from "../../contexts/ImageContext";
import {
  showcase_container,
  controls_wrapper_for_large_screens,
  img_container,
  showcase_controls,
  selectChangeAnimation,
  fullscreenBtn,
  fullScreenStyles,
  shiftBtnUp,
  shiftOnFullScreen,
} from "./Showcase.module.scss";

import trailerData from "../../galleryData/galleryData";
import { v4 as uuidv4 } from "uuid";
import Arrow from "../../components/Arrow/Arrow";
import {
  cylceImageBtn,
  back,
  next,
} from "../../components/Arrow/Arrow.module.scss";
import FullScreenIcon from "../../components/FullScreenIcon/FullScreenIcon";

const Showcase = () => {
  const { imgs } = useContext(ImageContext);
  const [currentArr, setCurrentArr] = useState([]);
  const [fullScreen, setFullScreen] = useState();
  const [selectValue, setSelectValue] = useState("");
  const [index, setIndex] = useState(0);
  const imageContainer = useRef(null);
  const figureArray = useRef(null);
  const animatedGalleryCover = useRef(null);
  const timeoutRef = useRef();
  const delayedStateChangeRef = useRef();

  const STR_INITIAL_ARRAY_STRING = "Select Unit";

  //. 1) Remove class of currently rendered image                           '
  //. 2) Depending on the 'direction' of the change, add the "showImage"    '
  //.    class to the image to be viewed in the next render                 '
  const changeImageFn = (action) => {
    figureArray.current[index].classList.remove("showImage");

    switch (action) {
      case "next":
        if (index >= 0 && index < currentArr.length - 1) {
          figureArray.current[index + 1].classList.add("showImage");
        } else if ((index = currentArr.length - 1)) {
          figureArray.current[0].classList.add("showImage");
        }
        break;
      case "prev":
        if (index === 0) {
          figureArray.current[currentArr.length - 1].classList.add("showImage");
        } else {
          figureArray.current[index - 1].classList.add("showImage");
        }
        break;
      default:
        break;
    }
  };

  // Returns figure elements after they have been rendered to the screen.
  // This allows us to cycle through the images.
  const returnAllFigureEls = () =>
    [...imageContainer.current.children].filter(
      (child) => child.tagName === "FIGURE"
    );

  //. Cycle forward through currentImageArr
  const nextImage = () => {
    changeImageFn("next");
    timeoutRef.current = setTimeout(() => {
      if (index < currentArr.length - 1) {
        setIndex((index) => index + 1);
      } else {
        setIndex(0);
      }
    }, 300);
  };

  //. Cycle back through currentImageArr
  const prevImage = () => {
    changeImageFn("prev");
    timeoutRef.current = setTimeout(() => {
      if (index > 0) {
        setIndex((index) => index - 1);
      } else {
        setIndex(parseInt(currentArr.length - 1));
      }
    }, 300);
  };

  const changeTrailerType = (e) => {
    const selectValue = e.target.value;
    animatedGalleryCover.current.classList.add(selectChangeAnimation);
    setSelectValue(selectValue);
    delayedStateChangeRef.current = setTimeout(() => {
      setIndex(0);
      setCurrentArr(imgs[`${selectValue}`]);
    }, 500);
  };

  const removeGalleryCover = useCallback(
    (timeout = 500) => {
      if (animatedGalleryCover?.current.classList.length > 0) {
        timeoutRef.current = setTimeout(() => {
          animatedGalleryCover.current.classList.remove(selectChangeAnimation);
        }, timeout);
      }
    },
    [selectValue]
  );

  const toggleFullScreen = () => {
    setFullScreen((prevState) => !prevState);
  };

  useEffect(() => {
    setCurrentArr(imgs[STR_INITIAL_ARRAY_STRING]);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    //. Returns all figures for scrolling through (adding "showImage")
    figureArray.current = returnAllFigureEls();
    removeGalleryCover();
    return () => {
      clearTimeout(timeoutRef.current);
    };
  });

  return (
    <section className={showcase_container}>
      <div
        className={`${controls_wrapper_for_large_screens} ${
          fullScreen ? fullScreenStyles : ""
        }`}
      >
        <div className={`${img_container}`} ref={imageContainer}>
          <div
            role="presentation"
            ref={animatedGalleryCover}
            className={selectChangeAnimation}
          ></div>
          <label
            htmlFor="description"
            className={`${fullScreen && shiftOnFullScreen}`}
            onClick={() => scrollTo(0, 0)}
          >
            i
          </label>
          <input type="checkbox" name="description" id="description" />
          <label
            htmlFor="fullScreen"
            className={`${fullscreenBtn} ${fullScreen ? shiftBtnUp : ""}`}
          >
            <span>Full Screen</span>
            <FullScreenIcon />
          </label>
          <input
            type="checkbox"
            name="fullScreen"
            id="fullScreen"
            onChange={toggleFullScreen}
          />
          {currentArr.map(({ src, alt, width, height, type }, i) => {
            const newId = `${Math.random() * i}-${Date.now()}`;
            const showCurrentImage = () => (i === index ? "showImage" : "");

            const calcImageFit = () => {
              let objectFitValue = width > height ? `fill` : `contain`;
              let layoutValue = `fill`;
              let isPortrait = "";

              if (fullScreen) {
                layoutValue = width > height ? `responsive` : `fill`;
                isPortrait = width > height ? "" : "portrait";
              }
              return { objectFitValue, layoutValue, isPortrait };
            };

            const imgValues = calcImageFit();
            const shownImage = showCurrentImage();
            return (
              <figure
                role="group"
                key={newId}
                className={shownImage}
                data-isportrait={imgValues.isPortrait}
              >
                <Image
                  src={src}
                  alt={alt}
                  layout={imgValues.layoutValue}
                  priority={true}
                  objectFit={imgValues.objectFitValue}
                />
                <figcaption>
                  <span>{type}</span>
                </figcaption>
                {/* Limit description to 140 characters */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt id magnam temporibus ducimus voluptates officiis modi
                  dolores fugit autem, perspiciatis sequi quasi debitis, totam
                  eaque dolorum doloribus recusandae. Numquam sed accusantium
                  ipsa, nisi distinctio iusto non dignissimos voluptates ratione
                  ullam provident incidunt dolores labore repellat modi est
                  voluptatum sunt. Dolore.
                </p>
              </figure>
            );
          })}
        </div>
        {/* Controls for gallery */}
        <div className={`${showcase_controls}`}>
          <Arrow
            btn={true}
            wrapperClassList={`customButton`}
            svgClassList={`${cylceImageBtn} ${back}`}
            dark={false}
            clickHandler={(e) => prevImage(e)}
          />
          <select
            name="type"
            id="trailerSelect"
            onChange={changeTrailerType}
            value={selectValue}
          >
            <option aria-disabled="true">Select Unit</option>
            {trailerData.map(({ type, label }) => {
              return (
                <option key={uuidv4()} value={type}>
                  {label}
                </option>
              );
            })}
          </select>
          <Arrow
            btn={true}
            wrapperClassList={`customButton`}
            svgClassList={`${cylceImageBtn} ${next}`}
            dark={true}
            clickHandler={(e) => nextImage(e)}
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;
