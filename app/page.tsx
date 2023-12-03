import CodeEditor from "@/components/code_editor/CodeEditor";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex-grow flex flex-col">
      <Navbar />
      <CodeEditor />
    </main>
  );
}
