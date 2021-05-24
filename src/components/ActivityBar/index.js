import React, { useState } from "react";

import ActivityItem from "./ActivityItem";
import SVGFiles from "assets/img/activity/Files";
import SVGSearch from "assets/img/activity/Search";
import SVGDebug from "assets/img/activity/Debug";
import SVGGit from "assets/img/activity/Git";
import SVGExtensions from "assets/img/activity/Extensions";
import SVGManage from "assets/img/activity/Manage";

const ActivityBar = () => {
  const classes = "fill-current text-base-base10 hover:text-base-base01";
  const ACTIVITY_ITEMS = {
    files: "files",
    search: "search",
    debug: "debug",
    git: "git",
    extensions: "extensions",
    manage: "manage",
  };
  const [activeItem] = useState(ACTIVITY_ITEMS.files);
  return (
    <div className="bg-base-base17 h-full w-12 flex justify-between flex-col pb-7">
      <div className="flex flex-col items-center">
        <ActivityItem active={activeItem === ACTIVITY_ITEMS.files}>
          <SVGFiles
            className={`${
              activeItem === ACTIVITY_ITEMS.files && "text-base-base01"
            } ${classes}`}
          />
        </ActivityItem>
        <ActivityItem>
          <SVGSearch
            className={`${
              activeItem === ACTIVITY_ITEMS.search && "text-base-base01"
            } ${classes}`}
          />
        </ActivityItem>
        <ActivityItem>
          <SVGDebug
            className={`${
              activeItem === ACTIVITY_ITEMS.debug && "text-base-base01"
            } ${classes}`}
          />
        </ActivityItem>
        <ActivityItem>
          <SVGGit
            className={`${
              activeItem === ACTIVITY_ITEMS.git && "text-base-base01"
            } ${classes}`}
          />
        </ActivityItem>
        <ActivityItem>
          <SVGExtensions
            className={`${
              activeItem === ACTIVITY_ITEMS.extensions && "text-base-base01"
            } ${classes}`}
          />
        </ActivityItem>
      </div>
      <div className="flex flex-col items-center">
        <ActivityItem>
          <SVGManage
            className={`${
              activeItem === ACTIVITY_ITEMS.manage && "text-base-base01"
            } ${classes}`}
          />
        </ActivityItem>
      </div>
    </div>
  );
};

export default ActivityBar;
