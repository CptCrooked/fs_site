import React from "react";
import ArrowSVG from "./ArrowSVG";
import { arrowShadow } from "./Arrow.module.scss";

const Arrow = ({
  btn = false,
  wrapperClassList,
  svgClassList,
  dark = false,
  clickHandler,
}) => {
  if (!btn) {
    return (
      <div role="presentation">
        <ArrowSVG classList={svgClassList} />
        <div role="presentation" className={arrowShadow}></div>
      </div>
    );
  } else {
    return (
      <button className={wrapperClassList} onClick={clickHandler}>
        <ArrowSVG classList={svgClassList} />
      </button>
    );
  }
};

export default Arrow;
