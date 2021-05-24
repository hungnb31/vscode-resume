import React from 'react';

const ActivityItem = (props) => {
  const { isActive = false, children } = props
  return (
    <div className={`py-3 border-l-2 text-base-base10 ${isActive && 'border-base-base01'} hover:text-base-base01 cursor-pointer w-full flex justify-center`}>
      {children}
    </div>
  )
}

export default ActivityItem;