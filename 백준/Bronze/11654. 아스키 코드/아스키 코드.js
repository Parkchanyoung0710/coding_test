const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString();

const ascii = input.charCodeAt(0);
console.log(ascii);