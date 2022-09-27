import React from "react";

const ArrowSVG = ({ classList, dark }) => {
  return (
    <svg
      width="232"
      height="165"
      viewBox="0 0 232 135"
      fill="url(gradient)"
      xmlns="http://www.w3.org/2000/svg"
      className={classList}
      style={{ fill: "url(#gradient)" }}
    >
      <defs>
        <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
          <stop
            offset="25%"
            // stopColor={returnStopColor()}
            stopOpacity={dark ? "0.3" : "0.7"}
          />
          <stop
            offset="95%"
            // stopColor={returnStopColor()}
            stopOpacity={dark ? "0.7" : "0.3"}
          />
        </linearGradient>
      </defs>
      <path d="M228.947 14.542C231.728 17.2711 231.746 21.7463 228.986 24.497L120.45 132.654C117.715 135.38 113.289 135.376 110.559 132.646L2.37309 24.4596C-0.364468 21.722 -0.360001 17.2822 2.38306 14.5502L14.0376 2.94241C16.7779 0.213141 21.2122 0.223335 23.9399 2.96517L110.54 90.0138C113.276 92.7637 117.726 92.7647 120.463 90.0161L207.184 2.92363C209.898 0.198401 214.302 0.172759 217.047 2.8662L228.947 14.542Z" />
    </svg>
  );
};

export default ArrowSVG;
