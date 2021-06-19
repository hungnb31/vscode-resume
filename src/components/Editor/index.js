import React from "react";
import MonacoEditor from "@monaco-editor/react";

const Editor = () => {
	return (
    <MonacoEditor
     height="90vh"
     defaultLanguage="javascript"
     defaultValue="// some comment"
   />
  )
}

export default Editor;