/*eslint-disable*/
import React from "react";

import Navbar from "components/Navbar"
import StatusBar from "components/StatusBar"

export default function Index() {
  return (
    <>
      <div className="container subpixel-antialiased">
        <Navbar />
        <StatusBar />
      </div>
    </>
  );
}
