import React from "react";

const SVGCollapseAll = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M11 11H6V12H11V11Z" fill="#CCCCCC" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 5L8 4H15L16 5V12L15 13H13V15L12 16H5L4 15V8L5 7H7V5ZM8 7H12L13 8V12H15V5H8V7ZM12 8H5V15H12V8Z"
        fill="#CCCCCC"
      />
    </svg>
  );
};

export default SVGCollapseAll;
