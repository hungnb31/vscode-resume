import React from "react";
import MonacoEditor from "@monaco-editor/react";

import { useTabs } from "contexts/tabs.context";
import TabList from "./TabList";
import StartWindow from "./StartWindow";
import { jsContent } from "utilities/fileContent";

const Editor = ({ content, language }) => {
  const { tabs, setTabs } = useTabs();
  const isTabListEmpty = tabs.length === 0;
  const opts = {
    readOnly: true,
    fontSize: 13,
  };
  return (
    <div className="flex flex-col w-full">
      <TabList tabs={tabs} setTabs={setTabs} />
      {isTabListEmpty ? (
        <StartWindow />
      ) : (
        <MonacoEditor
          className="bg-base-base21"
          language="javascript"
          theme="vs-dark"
          options={opts}
          defaultValue={jsContent}
        />
      )}
    </div>
  );
};

export default Editor;
