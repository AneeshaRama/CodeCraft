import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Button } from "../ui/button";

const CodeOutput = (props: {
  output: string;
  setOutput: Dispatch<SetStateAction<string>>;
}) => {
  const { output, setOutput } = props;
  useEffect(() => {}, [output]);
  return (
    <>
      <div className="text-white bg-slate-950 md:bg-slate-900 md:w-2/5">
        <div className="h-[4rem] border-b-gray-700 border-b-[0.01px] flex justify-between items-center p-5 bg-slate-900">
          <span className="font-semibold">Output</span>
          <Button
            variant={"secondary"}
            size={"sm"}
            onClick={() => setOutput("")}
          >
            clear
          </Button>
        </div>
        <div className="p-5 output">
          <span
            dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, "<br>") }}
          ></span>
        </div>
      </div>
      ;
    </>
  );
};

export default CodeOutput;
