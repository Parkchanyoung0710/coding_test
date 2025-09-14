const file = process.platform === 'linux' ? '/dev/stdin' :'./input.txt'
const input = require('fs').readFileSync(file).toString().split('\n');
const [N, M] = input[0].split(' ').map(Number)
const baskets = new Array(N).fill(0).map((n,index)=>index+1)

for (let i =1 ; i<=M;i++){
    const [num1,num2] = input[i].split(' ').map(Number)
    const tmp = baskets[num1 -1];

    baskets[num1-1]=baskets[num2-1]
    baskets[num2-1] =tmp

}

console.log(baskets.join(" "))