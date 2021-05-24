import React from "react";

import ActivityItem from './ActivityItem';
import SVGFiles from 'assets/img/activity/Files';
import SVGSearch from 'assets/img/activity/Search';

const ActivityBar = () => {
  return (
    <div className="absolute left-0 bg-base-base17 h-full w-12">
      <div className="flex flex-col items-center">
        <ActivityItem>
          <SVGFiles className="fill-current text-base-base01" />
        </ActivityItem>
        <ActivityItem>
          <SVGSearch className="fill-current text-base-base01" />
        </ActivityItem>
      </div>
    </div>
  );
};

export default ActivityBar;
