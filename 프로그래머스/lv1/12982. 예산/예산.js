function solution(d, budget) {
    var answer = 0;
    
    d.sort((a, b) => a-b);

    while(d.reduce((acc, cur) => acc + cur, 0) > budget) {
        d.pop();
    }
    
    return d.length;
}