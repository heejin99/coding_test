function solution(n) {
    var answer = [];

    for (let i = 0; i < n + 1; i++){
        if (i === 0) {
            answer.push(0);
        } else if (i === 1) {
            answer.push(1);
        } else {
            let sum = answer[i-1] + answer[i-2];
            answer.push(sum % 1234567);
        }
    }
    return answer[n];
}