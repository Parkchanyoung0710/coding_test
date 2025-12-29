const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const N = Number(input);

let count = 0;
let num = 666;

while (true) {
  if (String(num).includes('666')) {
    count += 1;
    if (count === N) {
      console.log(num);
      break;
    }
  }
  num += 1;
}
