import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { ImageContext } from "../../contexts/ImageContext";
import {
  select_container,
  highlightElement,
} from "./ImageSelector.module.scss";

const ImageSelector = ({ selectValues, updateSelectValues }) => {
  const { imgs } = useContext(ImageContext);

  const returnArrayOfObjectKeys = (obj) => {
    return [...Object.keys(obj)];
  };

  const unitTypeArray = returnArrayOfObjectKeys(imgs);
  return (
    <div className={select_container}>
      <select
        name="unitType"
        id="unitType"
        value={selectValues.unitType}
        onChange={updateSelectValues}
      >
        {unitTypeArray.map((unitType, i) => {
          if (i === 0) {
            <option key={uuid()} aria-disabled value="">
              {unitType}
            </option>;
          }
          return (
            <option key={uuid()} value={unitType}>
              {unitType}
            </option>
          );
        })}
      </select>
      <select
        name="subCategory"
        id="subCategory"
        onChange={updateSelectValues}
        value={selectValues.subCategory}
      >
        {selectValues.unitType === "" ? (
          <option>---</option>
        ) : (
          <>
            <option aria-disabled value="">
              Select Category
            </option>
            {returnArrayOfObjectKeys(imgs[selectValues.unitType]).map(
              (subCategory) => {
                return (
                  <option key={uuid()} value={subCategory}>
                    {subCategory}
                  </option>
                );
              }
            )}
          </>
        )}
      </select>
      {selectValues.unitType !== "" && selectValues.subCategory === "" && (
        <div className={highlightElement}></div>
      )}
    </div>
  );
};

export default ImageSelector;
