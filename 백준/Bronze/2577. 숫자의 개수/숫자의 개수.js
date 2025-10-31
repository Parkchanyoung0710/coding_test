const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

const mult = String(input[0] * input[1] * input[2]);
const digits = Array.from(mult);
const digitCount = {};

digits.forEach((digit) => {
  digitCount[digit] = digitCount[digit] + 1 || 1;
});

for (let i = 0; i < 10; i++) {
  console.log(digitCount[i] || 0);
}