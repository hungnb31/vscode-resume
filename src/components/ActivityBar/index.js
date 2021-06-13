/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";

import ActivityItem from "./ActivityItem";

const ActivityBar = () => {
  const classes =
    "fill-current text-base-base10 hover:text-base-base01 h-12 w-12 justify-center items-center text-2xl";
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
      <ul className="flex flex-col items-center">
        <ActivityItem active={activeItem === ACTIVITY_ITEMS.files}>
          <div
            className={`codicon codicon-files ${
              activeItem === ACTIVITY_ITEMS.files && "text-base-base01"
            } ${classes}`}
            style={{ fontSize: "1.5rem", display: "flex" }}
            title="Explorer (Ctrl+Shift+E)"
            aria-label="Explorer (Ctrl+Shift+E)"
          ></div>
        </ActivityItem>
        <ActivityItem>
          <a
            className={`codicon codicon-search ${
              activeItem === ACTIVITY_ITEMS.search && "text-base-base01"
            } ${classes}`}
            style={{ fontSize: "1.5rem", display: "flex" }}
            title="Search (Ctrl+Shift+F)"
            aria-label="Search (Ctrl+Shift+F)"
          ></a>
        </ActivityItem>
        <ActivityItem>
          <a
            className={`codicon codicon-source-control ${
              activeItem === ACTIVITY_ITEMS.debug && "text-base-base01"
            } ${classes}`}
            style={{ fontSize: "1.5rem", display: "flex" }}
            title="Source Control (Ctrl+Shift+G)"
            aria-label="Source Control (Ctrl+Shift+G)"
          ></a>
        </ActivityItem>
        <ActivityItem>
          <a
            className={`codicon codicon-debug-alt ${
              activeItem === ACTIVITY_ITEMS.git && "text-base-base01"
            } ${classes}`}
            style={{ fontSize: "1.5rem", display: "flex" }}
            title="Run and Debug (Ctrl+Shift+D)"
            aria-label="Run and Debug (Ctrl+Shift+D)"
          ></a>
        </ActivityItem>
        <ActivityItem>
          <a
            className={`codicon codicon-extensions ${
              activeItem === ACTIVITY_ITEMS.extensions && "text-base-base01"
            } ${classes}`}
            style={{ fontSize: "1.5rem", display: "flex" }}
            title="Extensions (Ctrl+Shift+X)"
            aria-label="Extensions (Ctrl+Shift+X)"
          ></a>
        </ActivityItem>
      </ul>
      <ul className="flex flex-col items-center">
        <ActivityItem>
          <a
            className={`codicon codicon-settings-gear ${
              activeItem === ACTIVITY_ITEMS.manage && "text-base-base01"
            } ${classes}`}
            style={{ fontSize: "1.5rem", display: "flex" }}
            title="Manage"
            aria-label="Manage"
          ></a>
        </ActivityItem>
      </ul>
    </div>
  );
};

export default ActivityBar;
