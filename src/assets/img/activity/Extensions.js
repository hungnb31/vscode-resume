import React from "react";

const SVGExtensions = (props) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.5 13.5L27 12H34.5L36 13.5V21L34.5 22.5H27L25.5 21V13.5ZM27 13.5V21H34.5V13.5H27ZM12 27V18L13.5 16.5H21L22.5 18V25.5H30L31.5 27V34.5L30 36H22.5H21H13.5L12 34.5V27ZM21 25.5V18H13.5V25.5H21ZM21 27H13.5V34.5H21V27ZM22.5 34.5H30V27H22.5V34.5Z"
        fill={props.fill}
      />
    </svg>
  );
};

export default SVGExtensions;
