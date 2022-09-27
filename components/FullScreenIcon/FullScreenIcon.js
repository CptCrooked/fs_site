import React from "react";

const FullScreenIcon = ({ dark = false }) => {
  const svgColour = () => {
    let colour;
    if (dark) {
      colour = "#ddddddb7";
    } else {
      colour = "#001b42c7";
    }
    return colour;
  };
  return (
    <svg
      width="151"
      height="143"
      viewBox="0 0 151 143"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 14.3852V59H17.6842V19.8057C17.6842 15.636 18.9474 14.3852 23.1579 14.3852H64V2.47424e-06H14.5263C5.89474 0 0 8.96467 0 14.3852Z" />
      <path d="M0 128.371V83H17.6842V122.859C17.6842 127.099 18.9474 128.371 23.1579 128.371H64V143H14.5263C5.89474 143 0 133.883 0 128.371Z" />
      <path d="M151 128.371V83H133.316V122.859C133.316 127.099 132.053 128.371 127.842 128.371H87V143H136.474C145.105 143 151 133.883 151 128.371Z" />
      <path d="M151 14.3852V59H133.316V19.8057C133.316 15.636 132.053 14.3852 127.842 14.3852H87V2.47424e-06H136.474C145.105 0 151 8.96467 151 14.3852Z" />
    </svg>
  );
};

export default FullScreenIcon;
