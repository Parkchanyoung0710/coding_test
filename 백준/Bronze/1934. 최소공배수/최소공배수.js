let [A, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 최소공약수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 최대공배수
function gcd(a, b) {
  while (b != 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

for (i = 0; i < arr.length; i++) {
  const [a, b] = arr[i].split(" ");
  console.log(lcm(a, b));
}