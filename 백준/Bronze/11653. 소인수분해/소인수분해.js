const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = Number(input);

let i = 2;

const result = [];
while(i <= input){
    if(input % i === 0) {
        input = input / i;
        result.push(i);
    } else {
        i++;
    }
}
console.log(result.join('\n'));