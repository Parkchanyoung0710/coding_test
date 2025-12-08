const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

// 평균 계산
const avg = input.reduce((a, b) => a + b, 0) / 5;

// 중앙값 계산
input.sort((a, b) => a - b);
const median = input[2];

// 출력
console.log(avg);
console.log(median);