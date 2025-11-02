const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const [H, M, S] = input[0].split(' ').map(Number);
const V = +input[1];

let time = new Date();

time.setUTCHours(H);
time.setUTCMinutes(M);
time.setUTCSeconds(S + V);
const h = time.getUTCHours();
const m = time.getUTCMinutes();
const s = time.getUTCSeconds();
console.log(h, m, s);