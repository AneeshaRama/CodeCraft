"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import RunButton from "./RunButton";

const CodeEditor = (props: {
  setOutput: Dispatch<SetStateAction<string>>;
  language: string;
}) => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const { setOutput, language } = props;
  const onChange = React.useCallback(
    (value: string, viewUpdate: ViewUpdate) => {
      setCodeSnippet(value);
    },
    []
  );
  return (
    <div className="md:w-3/5">
      <CodeMirror
        value=""
        theme={draculaInit({
          settings: {
            caret: "#c6c6c6",
            fontFamily: "monospace",
          },
        })}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
      <RunButton
        setOutput={setOutput}
        codeSnippet={codeSnippet}
        language={language}
      />
    </div>
  );
};

export default CodeEditor;
