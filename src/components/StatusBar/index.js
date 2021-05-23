import React from "react";

import StatusBarItem from "./StatusBarItem";

export default function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 bg-accents-blue06 text-base-base01 text-xs w-full h-7 flex justify-between">
        <div className="flex flex-wrap flex-row px-3">
          <StatusBarItem>
            <img src={require("assets/img/git.svg").default} alt="git" />
            <span className="mr-2">master</span>
          </StatusBarItem>
          <StatusBarItem>
            <img
              className="mr-2 ml-1"
              src={require("assets/img/sync.svg").default}
              alt="sync"
            />
            <span>0</span>
            <img
              className="mtr-1"
              src={require("assets/img/down.svg").default}
              alt="down"
            />
            <span>0</span>
            <img className="mr-2" src={require("assets/img/up.svg").default} alt="up" />
          </StatusBarItem>
          <StatusBarItem>
            <img
              className="ml-1 mr-1"
              src={require("assets/img/issue.svg").default}
              alt="issue"
            />
            <span>0</span>
            <img
              className="ml-2 mr-1"
              src={require("assets/img/warning.svg").default}
              alt="warning"
            />
            <span className="mr-2">0</span>
          </StatusBarItem>
        </div>
        <div className="flex flex-wrap flex-row px-3">
          <StatusBarItem>
            <span className="mr-2 ml-1">Space: 2</span>
          </StatusBarItem>
          <StatusBarItem>
            <span className="mr-2 ml-1">UTF-8</span>
          </StatusBarItem>
          <StatusBarItem>
            <span className="mr-2 ml-1">LF</span>
          </StatusBarItem>
          <StatusBarItem>
            <span className="mr-2 ml-1">Typescript</span>
          </StatusBarItem>
          <StatusBarItem>
            <img
              className="mr-2 ml-1"
              src={require("assets/img/feedback.svg").default}
              alt="feedback"
            />
          </StatusBarItem>
          <StatusBarItem>
            <img
              className="mr-2 ml-1"
              src={require("assets/img/bell.svg").default}
              alt="bell"
            />
          </StatusBarItem>
        </div>
      </footer>
    </>
  );
}
