import React, { useState } from "react";

const TabList = ({ tabs, setTabs }) => {
  const [hoveringTab, setHoveringTab] = useState(null);

  const handleFocusTab = (fileKey) => {
    setTabs(
      tabs.map((item) => {
        if (item.key === fileKey) {
          return { ...item, isFocusing: true };
        } else {
          return { ...item, isFocusing: false };
        }
      })
    );
  };

  const handleCloseTab = (fileKey) => {
    setTabs(tabs.filter(item => item.key !== fileKey));
  }

  return (
    <ul className="flex flex-row bg-base-base20 w-full">
      {tabs.map((item, idx) => (
        <li
          key={idx}
          onClick={() => handleFocusTab(item.key)}
          onMouseEnter={() => setHoveringTab(item.key)}
          onMouseLeave={() => setHoveringTab(null)}
          className={`flex flex-row cursor-pointer items-center p-2 border-base-base21 text-base-base06 border-solid border-r ${
            item.isFocusing ? "bg-base-base21" : ""
          }`}
        >
          <item.icon className={`text-lg mr-1 w-4 ${item.color}`} />
          <span className="text-xs">{item.name}</span>
          <i
            onClick={(e) => {
              e.stopPropagation();
              handleCloseTab(item.key)
            }}
            className={`codicon codicon-close ml-2 invisible hover:bg-base-base16 hover:rounded p-1 ${
              item.isFocusing || item.key === hoveringTab ? "visible" : ""
            }`}
          />
        </li>
      ))}
    </ul>
  );
};

export default TabList;
