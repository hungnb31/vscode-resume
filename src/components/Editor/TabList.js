import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const TabList = ({ tabs, setTabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoverTab, setHoverTab] = useState(null);

  const handleCloseTab = idx => {
    setTabs(tabs.filter((_, itemIdx) => idx !== itemIdx))
    if (tabs.lenght > 0) setActiveTab(0)
  }

  return (
    <ul className="flex flex-row bg-base-base20 w-full">
      {tabs.map((item, idx) => (
        <li
          key={idx}
          onClick={() => setActiveTab(idx)}
          onMouseEnter={() => setHoverTab(idx)}
          onMouseLeave={() => setHoverTab(null)}
          className={`flex flex-row cursor-pointer items-center p-2 border-base-base21 text-base-base06 border-solid border-r ${
            idx === activeTab ? "bg-base-base21" : ""
          }`}
        >
          <item.icon className={`text-lg mr-1 w-4 ${item.color}`} />
          <span className="text-xs">{item.name}</span>
          <IoClose
            onClick={() => handleCloseTab(idx)}
            className={`ml-2 text-xs invisible ${
              idx === activeTab || idx === hoverTab ? "visible" : ""
            }`}
          />
        </li>
      ))}
    </ul>
  );
};

export default TabList;
