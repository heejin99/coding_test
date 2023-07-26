function solution(number) {
    var answer = 0;
    
    const calculate = (cur, start) => {
        if (cur.length === 3) {
            answer += cur.reduce((sum, curr) => sum + curr, 0) === 0 ? 1 : 0;
            return;
        }
        for (let i = start; i < number.length; i++) {
            calculate([...cur, number[i]], i + 1);
        }
    }
    calculate([], 0);
    
    return answer;
}