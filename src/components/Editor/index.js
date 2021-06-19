import React from "react";
import MonacoEditor from "react-monaco-editor";

const Editor = ({ content, language }) => {
  const opts = {
    readOnly: true
  }
	return (
    <div className="flex flex-col w-full">
    <div>abcd</div>
    <MonacoEditor
     language="javascript"
     theme="vs-dark"
     options={opts}
     defaultValue="// some comment"
   />
   </div>
  )
}

export default Editor;