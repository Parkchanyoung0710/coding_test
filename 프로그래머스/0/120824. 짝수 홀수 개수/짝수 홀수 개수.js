function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    for(const v of num_list){
        if (v % 2 === 0){
            even++;
        } else odd++;
    }
    return [even, odd];
}