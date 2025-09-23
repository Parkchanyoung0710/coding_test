const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const num = input[1].split('');

let result = 0;

for (let i = 0; i < N; i++){
    result += parseInt(num[i]);
}

console.log(result);