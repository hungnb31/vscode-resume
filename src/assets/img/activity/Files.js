import React from "react";

const SVGFiles = (props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.5 12H20.5L19 13.5V18H14.5L13 19.5V34.5699L14.5 36H26.5699L28 34.5699V30H32.7L34 28.5699V16.5L29.5 12ZM29.5 14.12L31.88 16.5H29.5V14.12ZM26.5 34.5H14.5V19.5H19V28.5699L20.5 30H26.5V34.5ZM32.5 28.5H20.5V13.5H28V18H32.5V28.5Z"
        fill={props.fill}
      />
    </svg>
  );
};

export default SVGFiles;
