/*eslint-disable*/
import React from "react";

import StatusBar from "components/StatusBar";
import ActivityBar from "components/ActivityBar";
import Explorer from "components/Explorer";

export default function Index() {
  return (
    <>
      <div className="container subpixel-antialiased">
        <div className="absolute left-0 flex h-full">
          <ActivityBar />
          <Explorer />
          <div className="bg-accents-red02"></div>
        </div>
        <StatusBar />
      </div>
    </>
  );
}
