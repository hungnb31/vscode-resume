import React, { useState } from "react";

import SVGMore from "assets/img/activity/More";
import SVGNewFile from "assets/img/explorer/NewFile";
import SVGCollapseAll from "assets/img/explorer/CollapseAll";
import SVGRefresh from "assets/img/explorer/Refresh";
import SVGNewFolder from "assets/img/explorer/NewFolder";
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
          <div className="hover:bg-base-base16 p-1 rounded cursor-pointer">
            <SVGMore className="fill-current w-4 h-4" />
          </div>
        </div>
        <div className="h-6 flex flex-wrap flex-row justify-between cursor-pointer">
          <div className="flex flex-wrap flex-row content-center">
            <img
              src={require("assets/img/explorer/chevron-right.svg").default}
              alt="chevron down"
            />
            <span className="uppercase font-semibold text-tiny">
              my_resume
            </span>
          </div>
          <div className="flex flex-wrap flex-row content-center pr-2">
            <SVGNewFile className="fill-current hover:bg-base-base16 hover:rounded mr-1" />
            <SVGNewFolder className="fill-current hover:bg-base-base16 hover:rounded mr-1" />
            <SVGRefresh className="fill-current hover:bg-base-base16 hover:rounded mr-1" />
            <SVGCollapseAll className="fill-current hover:bg-base-base16 hover:rounded" />
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
