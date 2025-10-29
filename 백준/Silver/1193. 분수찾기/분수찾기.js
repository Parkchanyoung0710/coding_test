let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let line = 0;
while (input > 0) {
  line++;
  input -= line;
}

const position = line + input;

let N = 0,
  M = 0;
if (line % 2 === 1) {
  M = 1;
  N = line;
  for (let i = 0; i < position - 1; i++) { //첫번째 분수일때를 고려해 position -1
    N--;
    M++;
  }
}

if (line % 2 === 0) {
  N = 1;
  M = line;
  for (let i = 0; i < position - 1; i++) {
    M--;
    N++;
  }
}

console.log(`${N}/${M}`);