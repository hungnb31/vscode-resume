/*eslint-disable*/
import React from "react";

import StatusBar from "components/StatusBar";
import ActivityBar from "components/ActivityBar";
import Explorer from "components/Explorer";
import Editor from "components/Editor";

export default function Index() {
  return (
    <>
      <div className="container subpixel-antialiased">
        <div className="absolute left-0 flex h-full w-full pb-6">
          <ActivityBar />
          <Explorer />
          <Editor content="" />
        </div>
        <StatusBar />
      </div>
    </>
  );
}
