const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [, ...input] = fs.readFileSync(filePath).toString().split('\n');

for (let i in input){
    console.log([input[i][0], input[i].slice(-1)].join(""));
}