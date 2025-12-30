const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

const resistance = {
    black:0,
    brown:1,
    red:2,
    orange:3,
    yellow:4,
    green:5,
    blue:6,
    violet:7,
    grey:8,
    white:9,
}
let result = 1;

const r1 = resistance[input[0]];
const r2 = resistance[input[1]];
const r3 = resistance[input[2]];
result = (r1 * 10 + r2) * 10 ** r3;
console.log(result);