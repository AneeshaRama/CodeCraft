import CodeEditor from "@/components/code_editor/CodeEditor";
import CodeOutput from "@/components/code_editor/CodeOutput";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 w-screen flex-grow flex flex-col relative">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <CodeEditor />
        <CodeOutput />
      </div>
    </main>
  );
}
