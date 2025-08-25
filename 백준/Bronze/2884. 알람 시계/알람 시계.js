const input = require('fs').readFileSync('dev/stdin').toString().trim().split(" ");

let hour = parseInt(input[0]);
let minute = Number(input[1]);
const minusMinute = 45;
const oneHour = 60;

if (minute >= minusMinute) {
    minute -= minusMinute;
    console.log(hour, minute);
} else if (hour >= 1){
    hour -= 1;
    minute = minute - minusMinute + oneHour;
    console.log(hour, minute);
} else if(hour === 0){
    hour = 23;
    minute = minute - minusMinute + oneHour;
    console.log(hour, minute);
}