const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++) {
  let C = parseInt(input[i]);

  const quarters = Math.floor(C / 25);
  C %= 25;

  const dimes = Math.floor(C / 10);
  C %= 10;

  const nickels = Math.floor(C / 5);
  C %= 5;

  const pennies = C;

  console.log(`${quarters} ${dimes} ${nickels} ${pennies}`);
}