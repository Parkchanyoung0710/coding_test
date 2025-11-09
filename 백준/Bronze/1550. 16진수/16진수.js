const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
let a = parseInt(input, 16);
console.log(a);