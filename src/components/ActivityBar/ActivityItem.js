import React from "react";

const ActivityItem = (props) => {
  const { active = false, children } = props;
  return (
    <li
      className={`
      ${active && "border-l-2 border-base-base01"}
      cursor-pointer
      w-full`}
    >
      {children}
    </li>
  );
};

export default ActivityItem;
