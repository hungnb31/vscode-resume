import React from "react";

const SVGRefresh = (props) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.56253 4.5158C5.46348 5.45013 4 7.55417 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 7.32522 14.2497 5.05922 11.832 4.28485L11.5297 5.23835C13.5429 5.88457 15 7.77213 15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 8.31107 5.83742 6.8177 7.11969 5.91248L7.56253 4.5158Z"
        fill="#CCCCCC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 5H4V4H7.5L8 4.5V8H7V5Z"
        fill="#CCCCCC"
      />
    </svg>
  );
};

export default SVGRefresh;
