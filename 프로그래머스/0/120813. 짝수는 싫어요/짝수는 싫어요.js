function solution(n) {
    const result = [];
    
    for(let i = 1; i <= n; i++){
        if(i % 2 === 1){
        result.push(i);    
        }
    }
    return result;
}