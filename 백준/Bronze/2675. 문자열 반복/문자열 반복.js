const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(" ");
  const result = [...S].map((v) => v.repeat(Number(R))).join("");
  console.log(result);
}