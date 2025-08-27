const input = require('fs').readFileSync("/dev/stdin").toString();

let cn = 0;
for (i = 1; i <= input; i++) {
    cn = cn + i;
}
console.log(cn);