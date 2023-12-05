import fs from 'fs';
import path from 'path';
import util from 'util';
import crypto from 'crypto';

const random = crypto.randomBytes(10).toString('hex');
const fileName = `${random}.js`;
const tempDir = path.join(__dirname, 'temp');
const filePath = path.join(tempDir, fileName);
const outputPath = path.join(tempDir, 'output.txt');
const exec = util.promisify(require('child_process').exec);

export const runCode = async (codeSnippet: string) => {
  try {
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }
    fs.writeFileSync(filePath, codeSnippet);
    await exec(`node ${filePath} > ${outputPath} 2>&1`);
  } catch (error: any) {
    console.error('Error running the code:', error.message);
  }
};
