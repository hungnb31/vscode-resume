import React, { useState } from "react";

import FileTree from "./FileTree";

const Explorer = () => {
  const [openTree, setOpenTree] = useState(true);

  return (
    <div className="flex flex-col w-72 min-w-max bg-base-base20 text-xs text-base-base06">
      <div className="w-full">
        <div className="h-9 px-3 flex flex-wrap content-center justify-between">
          <span className="uppercase flex content-center flex-wrap">
            Explorer
          </span>
          <div className="hover:bg-base-base16 p-1 rounded cursor-pointer flex">
            <div className="codicon codicon-ellipsis"></div>
          </div>
        </div>
        <div className="h-6 flex flex-wrap flex-row justify-between">
          <div
            role="button"
            className="flex flex-wrap flex-row content-center cursor-pointer focus:ring-2 mr-3"
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
          <FileTree isOpen={openTree} />
        </div>
      </div>
    </div>
  );
};

export default Explorer;
