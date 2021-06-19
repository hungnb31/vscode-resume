import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";
import { IoInformationCircleSharp, IoLogoJavascript } from "react-icons/io5";

import TabList from "./TabList"

const Editor = ({ content, language }) => {
  const [tabs, setTabs] = useState([
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
  const opts = {
    readOnly: true,
  };
  return (
    <div className="flex flex-col w-full">
      <TabList tabs={tabs} setTabs={setTabs} />
      <MonacoEditor
        language="javascript"
        theme="vs-dark"
        options={opts}
        defaultValue="// some comment"
      />
    </div>
  );
};

export default Editor;
