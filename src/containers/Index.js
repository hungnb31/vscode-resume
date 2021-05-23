/*eslint-disable*/
import React from "react";

import StatusBar from "components/StatusBar";
import ActivityBar from "components/ActivityBar";

export default function Index() {
  return (
    <>
      <div className="container subpixel-antialiased flex">
        <ActivityBar />
        <StatusBar />
      </div>
    </>
  );
}
