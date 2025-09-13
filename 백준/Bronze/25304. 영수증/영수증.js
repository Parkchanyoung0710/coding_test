const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const sum = +input.shift();
const N = +input.shift();
let answer = 0;

input.forEach((e) => {
    const [prime, num] = e.split(" ").map(Number);
    let plus = prime * num;
    answer += plus;
});

answer === sum ? console.log('Yes') : console.log('No');