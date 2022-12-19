import { v4 as uuid } from "uuid";
import imgData from "../../dev/imageStructure";

import {
  select_container,
  highlightElement,
} from "./ImageSelector.module.scss";

const ImageSelector = ({ selectValues, updateSelectValues }) => {
  const returnArrayOfObjectKeys = (obj) => {
    return [...Object.keys(obj)];
  };

  const unitTypeArray = returnArrayOfObjectKeys(imgData);

  return (
    <div className={select_container}>
      <select
        name="unitType"
        id="unitType"
        value={selectValues.unitType}
        onChange={updateSelectValues}
      >
        <option aria-disabled value="">
          Select Unit
        </option>
        {unitTypeArray.map((unitType) => {
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
            {returnArrayOfObjectKeys(imgData[selectValues.unitType]).map(
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
