const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (a === 0 && b === 0) break; 
  console.log(a + b);
}