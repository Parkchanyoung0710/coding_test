const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

console.log(
    [...new Set(input)]
        .sort((a,b) => a.length - b.length || a.localeCompare(b))
        .join('\n')
);