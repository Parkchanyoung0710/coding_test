function solution(array) {
    const countMap = {};
    
    for(let num of array){
        if(num in countMap){
            countMap[num]++;
        } else{
            countMap[num] = 1;
        }
    }
    
    let maxCount = 0;
    for(let num in countMap){
        if(countMap[num] > maxCount){
            maxCount = countMap[num];
        }
    }
    
    let freq = [];
    for(let num in countMap){
        if(countMap[num] === maxCount){
            freq.push(parseInt(num));
        }
    }
    if(freq.length ===1){
        return freq[0];
    } else{
        return -1;
    }
}