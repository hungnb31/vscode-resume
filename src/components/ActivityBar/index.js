import React from "react";

import SVGFiles from 'assets/img/activity/Files';

const ActivityBar = () => {
  return (
    <div className="absolute left-0 bg-base-base17 h-full w-12 py-5 px-2">
      <div className="flex flex-col items-center">
        <div className="py-3">
          <SVGFiles className="fill-current text-accents-red01" />
        </div>
        {/* <div className="py-3">
          <img
            src={require("assets/img/activity/files.svg").default}
            alt="files"
          />
        </div>
        <div className="py-3">
          <img
            src={require("assets/img/activity/files.svg").default}
            alt="files"
          />
        </div>
        <div className="py-3">
          <img
            src={require("assets/img/activity/files.svg").default}
            alt="files"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ActivityBar;
