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

import Arrow from "../../components/Arrow/Arrow";
import {
  cylceImageBtn,
  back,
  next,
} from "../../components/Arrow/Arrow.module.scss";
import FullScreenIcon from "../../components/FullScreenIcon/FullScreenIcon";
import ImageSelector from "../ImageSelector/ImageSelector";
import changeImage from "../../public/imgs/Change.png";

const Showcase = () => {
  const { imgs } = useContext(ImageContext);
  const [currentArr, setCurrentArr] = useState([]);
  const [fullScreen, setFullScreen] = useState();
  const [selectValues, setSelectValues] = useState({
    unitType: "",
    subCategory: "",
  });
  const [index, setIndex] = useState(0);
  const imageContainer = useRef(null);
  const figureArray = useRef(null);
  const animatedGalleryCover = useRef(null);
  const timeoutRef = useRef();
  const changeImagetimeoutRef = useRef();
  const descriptionRef = useRef(null);

  const STR_INITIAL_ARRAY_STRING = "Select Unit";

  const updateSelectValues = (e) => {
    if (e.target.name === "unitType") {
      setSelectValues({
        unitType: e.target.value,
        subCategory: "",
      });
    } else {
      setSelectValues({
        ...selectValues,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Returns figure elements after they have been rendered to the screen.
  // This allows us to cycle through the images.
  const returnAllFigureEls = () =>
    [...imageContainer.current.children].filter(
      (child) => child.tagName === "FIGURE"
    );

  //. 1) Remove class of currently rendered image                           '
  //. 2) Depending on the 'direction' of the change, add the "showImage"    '
  //.    class to the image to be viewed in the next render                 '
  const changeImageFn = (action) => {
    if (currentArr.length === 1) return;
    if (figureArray.current[index] !== undefined) {
      console.log(figureArray);
      figureArray.current[index].classList.remove("showImage");
    }

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
          if (figureArray.current[index - 1] !== undefined) {
            figureArray.current[index - 1].classList.add("showImage");
          }
        }
        break;
      default:
        break;
    }
  };

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

  const removeGalleryCover = useCallback(
    (timeout = 500) => {
      if (animatedGalleryCover?.current.classList.length > 0) {
        timeoutRef.current = setTimeout(() => {
          animatedGalleryCover.current.classList.remove(selectChangeAnimation);
        }, timeout);
      }
    },
    //eslint-disable-next-line
    [selectValues]
  );

  const toggleFullScreen = () => {
    setFullScreen((prevState) => !prevState);
  };

  useEffect(() => {
    setIndex(0);
    if (selectValues.unitType === "" && selectValues.subCategory === "") {
      setCurrentArr(imgs[STR_INITIAL_ARRAY_STRING]);
    } else if (
      selectValues.unitType !== "" &&
      selectValues.subCategory === ""
    ) {
      setCurrentArr([
        {
          src: changeImage,
          alt: "Select Category",
          height: 3872,
          width: 6062,
          type: "Category?",
        },
      ]);
    } else {
      setCurrentArr(
        imgs[`${selectValues.unitType}`][`${selectValues.subCategory}`]
      );
    }
    //eslint-disable-next-line
  }, [selectValues]);

  useEffect(() => {
    animatedGalleryCover.current.classList.remove(selectChangeAnimation);
    //. Returns all figures for scrolling through (adding "showImage")
    figureArray.current = returnAllFigureEls();
    removeGalleryCover();
    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(changeImagetimeoutRef?.current);
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
          >
            i
          </label>
          <input type="checkbox" name="description" id="description" />
          <label
            htmlFor="fullScreen"
            className={`${fullscreenBtn} ${fullScreen ? shiftBtnUp : ""}`}
          >
            <span>Full Screen</span>
            <FullScreenIcon fullScreen={fullScreen} />
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
                ref={descriptionRef}
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
                <article>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    autem quidem veniam quia ducimus dolorem ipsam rem
                    consequatur. Voluptas soluta corporis rerum porro, dolorem
                    odit quis hic. Cupiditate libero officiis aliquam impedit
                    deserunt nam tempora vero soluta aspernatur illum ratione
                    quasi officia aperiam reiciendis, nihil quibusdam aliquid
                    nesciunt quis ex quisquam quos odit qui exercitationem
                    quidem? Libero omnis itaque repudiandae vel, eius sapiente?
                    Veniam sapiente officia sunt nemo, voluptas, quasi
                    repellendus vero deleniti illo maxime porro. Reiciendis
                    aliquid officiis et voluptatibus aperiam quae quod vero
                    neque nemo recusandae veniam libero tempore, dolore magnam
                    adipisci? Sit consequatur quaerat corporis accusamus,
                    corrupti ex ad maxime aliquam nihil, provident eveniet
                    impedit error! Cum, nobis officiis. Fugit officia similique
                    cumque minima commodi nulla nisi ullam, dolor laborum
                    consectetur voluptate exercitationem necessitatibus hic
                    nesciunt eius quo. Facilis mollitia inventore laudantium sed
                    dolore optio odio minima?
                  </p>
                </article>
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
          <ImageSelector
            selectValues={selectValues}
            updateSelectValues={updateSelectValues}
          />
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
