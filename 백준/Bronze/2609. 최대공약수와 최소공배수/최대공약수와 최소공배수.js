const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((item) => Number(item));

let A = input[0];
let B = input[1];

while(A % B !== 0){
    let r = A % B;
    
    if(r !==0 ){
        A = B;
        B = r;
    }
}
console.log(B);
console.log((input[0] * input[1]) / B);