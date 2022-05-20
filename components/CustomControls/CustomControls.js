import Link from "next/link";
import {
  carousel_controls,
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
        <button data-btn="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </button>
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
    </div>
  );
};

export default CustomControls;
