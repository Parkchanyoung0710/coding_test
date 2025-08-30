const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const A = input[0];
const i = input[1];

console.log(A.slice(i-1,i));