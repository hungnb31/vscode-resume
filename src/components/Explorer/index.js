import React, { useState } from "react";
import { IoInformationCircleSharp, IoLogoJavascript } from "react-icons/io5"

import FileTree from "./FileTree";

const Explorer = () => {
  const [openTree, setOpenTree] = useState(true);
  const [tree] = useState([
    {
      name: "PROJECTS.md",
      icon: IoInformationCircleSharp,
      color: "text-fileicon-markdown",
      link: "/first-project",
    },
    {
      name: "ABOUTME.md",
      icon: IoInformationCircleSharp,
      color: "text-fileicon-markdown",
      link: "/about-me",
    },
    {
      name: "index.js",
      icon: IoLogoJavascript,
      color: "text-fileicon-javascript",
      link: "/about-me",
    },
  ]);

  return (
    <div className="flex flex-col w-72 bg-base-base20 text-xs text-base-base06">
      <div className="w-full">
        <div className="h-9 px-3 flex flex-wrap content-center justify-between">
          <span className="uppercase flex content-center flex-wrap">
            Explorer
          </span>
          <div className="hover:bg-base-base16 p-1 rounded cursor-pointer flex">
            <div className="codicon codicon-ellipsis"></div>
          </div>
        </div>
        <div className="h-6 flex flex-wrap flex-row">
          <div
            role="button"
            className="flex flex-wrap flex-row content-center cursor-pointer flex-grow focus:ring-2"
            onClick={() => setOpenTree(!openTree)}
          >
            <div
              className={`codicon codicon-chevron-right ${
                openTree ? "transform rotate-90" : ""
              }`}
            ></div>
            <span className="uppercase text-tiny font-bold">my_resume</span>
          </div>
          <div
            className={`flex flex-wrap flex-row content-center pr-2 ${
              openTree ? "block" : "hidden"
            }`}
          >
            <i className="codicon codicon-new-file hover:bg-base-base16 hover:rounded cursor-pointer p-1"></i>
            <i className="codicon codicon-new-folder hover:bg-base-base16 hover:rounded cursor-pointer p-1"></i>
            <i className="codicon codicon-refresh hover:bg-base-base16 hover:rounded cursor-pointer p-1"></i>
            <i className="codicon codicon-collapse-all hover:bg-base-base16 hover:rounded cursor-pointer p-1"></i>
          </div>
        </div>
        <div className={"h-auto flex flex-wrap flex-col"}>
          <FileTree tree={tree} isOpen={openTree} />
        </div>
      </div>
    </div>
  );
};

export default Explorer;
