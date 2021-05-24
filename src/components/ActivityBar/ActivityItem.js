import React from 'react';

const ActivityItem = (props) => {
  const { active = false, children } = props
  return (
    <div className={`
      ${active && "border-l-2 border-base-base01"}
      cursor-pointer
      w-full
      flex
      justify-center`
    }>
      {children}
    </div>
  )
}

export default ActivityItem;