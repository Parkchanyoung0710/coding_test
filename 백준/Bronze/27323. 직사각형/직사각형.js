const [side1, side2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(side1 * side2);