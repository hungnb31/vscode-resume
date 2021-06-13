import React, { useState } from "react";

import FileTree from "./FileTree";

const Explorer = () => {
  const [tree] = useState([
    {
      name: 'projects',
      type: "Folder",
      children: [
        {
          name: 'first-project.md',
          type: 'Markdown',
          link: '/first-project'
        }
      ]
    },
    {
      name: 'ABOUTME.md',
      type: "Markdown",
      link: "/about-me"
    }
  ])
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
        <div className="h-6 flex flex-wrap flex-row justify-between cursor-pointer">
          <div className="flex flex-wrap flex-row content-center">
            <div className="codicon codicon-chevron-right"></div>
            <span className="uppercase font-semibold text-tiny">
              my_resume
            </span>
          </div>
          <div className="flex flex-wrap flex-row content-center pr-2">
            <div className="codicon codicon-new-file fill-current hover:bg-base-base16 hover:rounded p-1"></div>
            <div className="codicon codicon-new-folder fill-current hover:bg-base-base16 hover:rounded p-1"></div>
            <div className="codicon codicon-refresh fill-current hover:bg-base-base16 hover:rounded p-1"></div>
            <div className="codicon codicon-collapse-all fill-current hover:bg-base-base16 hover:rounded p-1"></div>
          </div>
        </div>
        <div className="h-auto flex flex-wrap flex-col">
          <FileTree tree={tree} />
        </div>
      </div>
    </div>
  );
};

export default Explorer;
