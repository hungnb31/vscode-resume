import React from "react";

import StatusBarItem from "./StatusBarItem";

export default function Footer() {
  return (
    <>
      <div className="absolute bottom-0 bg-accents-blue06 text-base-base01 text-xs w-full h-6 flex justify-between">
        <ul className="flex flex-wrap flex-row px-3">
          <StatusBarItem>
            <div className="codicon codicon-source-control"></div>
            &nbsp;
            <span>master</span>
          </StatusBarItem>
          <StatusBarItem>
            <div className="codicon codicon-error"></div>
            &nbsp;
            <span>0</span>
            &nbsp;
            <div className="codicon codicon-warning"></div>
            &nbsp;
            <span>0</span>
          </StatusBarItem>
        </ul>
        <ul className="flex flex-wrap flex-row px-3">
          <StatusBarItem>
            <span>Space: 2</span>
          </StatusBarItem>
          <StatusBarItem>
            <span>UTF-8</span>
          </StatusBarItem>
          <StatusBarItem>
            <span>LF</span>
          </StatusBarItem>
          <StatusBarItem>
            <span>Typescript</span>
          </StatusBarItem>
          <StatusBarItem>
            <div className="codicon codicon-feedback"></div>
          </StatusBarItem>
          <StatusBarItem>
            <div className="codicon codicon-bell"></div>
          </StatusBarItem>
        </ul>
      </div>
    </>
  );
}
