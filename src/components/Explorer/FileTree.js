import { Fragment } from "react";

const FileTree = ({ tree, isOpen }) => {
  return (
    <Fragment>
      <ul className={`${isOpen ? "block" : "hidden"}`}>
        {tree.map((item, idx) => {
          return (
            <li className="flex items-center py-1 px-5 hover:bg-base-base17 cursor-pointer" key={idx}>
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
