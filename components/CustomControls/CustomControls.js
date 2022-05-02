import React from "react";
import { v4 as uuid } from "uuid";
import {
  carousel_controls,
  custom_select,
  carousel_buttons,
} from "./CustomControls.module.scss";

const CustomControls = ({
  trailerData,
  fns: { back, forward },
  currentArr,
}) => {
  return (
    <div className={carousel_controls}>
      {/* Semantic JSX */}
      <select name="trailerType" id="trailerType">
        {trailerData.map((trailerType) => {
          return (
            <option key={uuid()} value={`${trailerType.type}`}>
              {trailerType.label}
            </option>
          );
        })}
      </select>
      {/* UI JSX */}
      <div role="presentation" className={custom_select}>
        {trailerData.map((trailerType) => {
          return (
            <div key={uuid()} value={`${trailerType.type}`}>
              {trailerType.label}
            </div>
          );
        })}
      </div>
      <div className={carousel_buttons}>
        <button onClick={() => back(currentArr)}>{`<`}</button>
        <button>Menu</button>
        <button>F/S</button>
        <button onClick={() => forward(currentArr)}>{`>`}</button>
      </div>
    </div>
  );
};

export default CustomControls;
