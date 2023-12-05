"use client";
import CodeEditor from "@/components/code_editor/CodeEditor";
import CodeOutput from "@/components/code_editor/CodeOutput";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";

export default function Home() {
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("");
  return (
    <main className="min-h-screen bg-slate-950 w-screen flex-grow flex flex-col relative">
      <Navbar setLanguage={setLanguage} />
      <div className="flex flex-col md:flex-row">
        <CodeEditor setOutput={setOutput} language={language} />
        <CodeOutput output={output} setOutput={setOutput} />
      </div>
    </main>
  );
}
