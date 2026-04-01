function solution(a, d, included) {
    return included.reduce((sum, isIncluded, i) => {
        return isIncluded ? sum + (a + i * d) : sum;
    }, 0);
}