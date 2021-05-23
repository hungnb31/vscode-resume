import React from "react";

import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 bg-accents-blue06 text-base-base01 text-xs w-full h-7 flex justify-between">
        <div className="flex flex-wrap flex-row px-3">
          <div className="flex flex-wrap items-center flex-row hover:bg-accents-blue05 h-full pl-1 pr-2 cursor-pointer">
            <img src={require("assets/img/git.svg").default} alt="git" />
            <span>master</span>
          </div>
          <div className="flex flex-wrap items-center flex-row hover:bg-accents-blue05 h-full pl-1 pr-2 cursor-pointer">
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
            <img src={require("assets/img/up.svg").default} alt="up" />
          </div>
          <div className="flex flex-wrap items-center flex-row hover:bg-accents-blue05 h-full pl-1 pr-2 cursor-pointer">
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
            <span className="mr-1">0</span>
          </div>
        </div>
        <div className="flex flex-wrap flex-row px-3">
        <FooterItem>
            <span className="mr-2 ml-1">Space: 2</span>
          </FooterItem>
          <FooterItem>
            <span className="mr-2 ml-1">UTF-8</span>
          </FooterItem>
          <FooterItem>
            <span className="mr-2 ml-1">LF</span>
          </FooterItem>
          <FooterItem>
            <span className="mr-2 ml-1">Typescript</span>
          </FooterItem>
          <FooterItem>
            <img
              className="mr-2 ml-1"
              src={require("assets/img/feedback.svg").default}
              alt="feedback"
            />
          </FooterItem>
          <FooterItem>
            <img
              className="mr-2 ml-1"
              src={require("assets/img/bell.svg").default}
              alt="bell"
            />
          </FooterItem>
        </div>
      </footer>
    </>
  );
}
