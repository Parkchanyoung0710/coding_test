const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

// 고정된 체스 피스 개수
const pieces = [1, 1, 2, 2, 2, 8];

// 계산 결과 (필요한 피스 수 = 고정값 - 입력값)
const result = pieces.map((piece, i) => piece - input[i]);

console.log(result.join(' '));
