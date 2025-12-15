const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');

const arr = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10,
}
let time = 0;

for(let i=0; i < input.length; i++){
    for(let j in arr){
        if(j.includes(input[i])){
            time += arr[j]
        }
    }
}
console.log(time);