import fs from 'fs';
import path from 'path';
import { rimraf } from 'rimraf';
import { runCode } from "@/utils/run";

export async function POST(req: Request){
    const {payload} = await req.json();    
    let output: string = "";
    if(payload.language === "javascript"){
        await runCode(payload.codeSnippet).then(()=>{
            const tempDirPath = path.join(__dirname, 'temp');
            const outputPath = path.join(tempDirPath, 'output.txt');
            output = fs.readFileSync(outputPath, 'utf8');
    
            if (fs.existsSync(tempDirPath)) {
                rimraf.sync(tempDirPath);
            }        
        });
    }
    return new Response(JSON.stringify({output: output}));
}