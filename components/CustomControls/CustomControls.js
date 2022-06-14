import Link from "next/link";
import {
  carousel_controls,
  carousel_buttons,
  changeImageButton,
  select_sm_screen,
  select_mdToLrg_screen,
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
        <button
          onClick={() => back(currentArr)}
          data-btn-type="back"
          className={changeImageButton}
        >
          <div></div>
        </button>
        <select
          name="trailerType"
          id="trailerType1"
          className={select_sm_screen}
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
        <button
          onClick={() => forward(currentArr)}
          data-btn-type="next"
          className={changeImageButton}
        >
          <div></div>
        </button>
      </div>
      <select
        name="trailerType"
        id="trailerType2"
        className={select_mdToLrg_screen}
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
      {/* Semantic JSX */}
    </div>
  );
};

export default CustomControls;
