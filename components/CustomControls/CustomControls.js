import { useEffect } from "react";
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
  handleUnitChange,
  selectRefValue,
}) => {
  const defaultDisabledOption = {
    type: "Select A Unit",
    label: "Select A Unit...",
  };

  return (
    <div className={carousel_controls}>
      <div className={carousel_buttons}>
        <button onClick={() => back(currentArr)}>{`<`}</button>
        <button>Menu</button>
        <button>F/S</button>
        <button onClick={() => forward(currentArr)}>{`>`}</button>
      </div>
      {/* Semantic JSX */}
      <select
        name="trailerType"
        id="trailerType"
        onChange={handleUnitChange}
        value={selectRefValue.value}
        defaultValue={defaultDisabledOption.type}
      >
        {[defaultDisabledOption, ...trailerData].map(({ type, label }, i) => {
          return (
            <option
              key={`${type}${label}`}
              value={`${type}`}
              disabled={i < 1 && true}
            >
              {label}
            </option>
          );
        })}
      </select>
      {/* UI JSX */}
      {/* <div role="presentation" className={custom_select}>
        <div>
          <span>Select a unit...</span>
        </div>
        {trailerData.reverse().map(({ type, label }) => {
          return (
            <div key={uuid()} value={`${type}`}>
              <span>{label}</span>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default CustomControls;
