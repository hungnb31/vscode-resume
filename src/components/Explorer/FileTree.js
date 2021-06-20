import { Fragment, useState } from "react";

import { useTabs } from "contexts/tabs.context";
import listFile from "utilities/fileList";

const FileTree = ({ isOpen }) => {
  const [files] = useState(listFile);

  const { tabs, setTabs } = useTabs();

  const handleOpenFile = (file) => {
    const isFileOpened = tabs.filter(item => item.key === file.key).length > 0;
    if (isFileOpened) {
      setTabs(tabs.map(item => item.key === file.key ? { ...item, isFocusing: true } : { ...item, isFocusing: false }))
    } else {
      setTabs([...tabs.map(item => ({ ...item, isFocusing: false })), { ...file, isFocusing: true }]);
    }
  };

  return (
    <Fragment>
      <ul className={`${isOpen ? "block" : "hidden"}`}>
        {files.map((item, idx) => {
          return (
            <li
              className="flex items-center py-1 px-5 hover:bg-base-base17 cursor-pointer"
              key={idx}
              onClick={() => handleOpenFile(item)}
            >
              <item.icon className={`text-lg mr-2 w-4 ${item.color}`} />
              <span className="font-semibold">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default FileTree;
