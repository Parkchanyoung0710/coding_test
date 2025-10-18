const fs = require('fs');
const inputs = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

for (const input of inputs) {
    const [a,b] = input.split(' ').map(Number);
    
    if(a == 0 && b == 0) break;
    
    if(a % b === 0) console.log('multiple');
    else if(b % a === 0) console.log('factor');
    else console.log('neither');
}