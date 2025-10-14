const input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);
let space = ' ';
let star = '*';

for(let i = 1; i <= num; i++){
  console.log(space.repeat(num-i) + star.repeat(i));
}