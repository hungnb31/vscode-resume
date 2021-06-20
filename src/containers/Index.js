/*eslint-disable*/
import React, { Fragment } from "react";

import StatusBar from "components/StatusBar";
import ActivityBar from "components/ActivityBar";
import Explorer from "components/Explorer";
import Editor from "components/Editor";
import { TabsProvider } from "contexts/tabs.context";

export default function Index() {
  return (
    <Fragment>
      <div className="container subpixel-antialiased">
        <div className="absolute left-0 flex h-full w-full pb-6">
          <ActivityBar />
          <TabsProvider>
            <Explorer />
            <Editor />
          </TabsProvider>
        </div>
        <StatusBar />
      </div>
    </Fragment>
  );
}
