function solution(money) {
    const count = Math.floor(money / 5500);
    const rest = money % 5500;
    
    
    return [count, rest];
}