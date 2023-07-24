function solution(left, right) {
    let answer = 0;
    for (left; left <= right; left++) {
        let counts = 0;
        for (let i = 0; i < left +1; i++) {
            if (left % i === 0) {
                counts += 1;
            }
        }
        
        if (counts % 2 === 0) {
            answer += left;
        } else {
            answer -= left;
        }
    }
    return answer;
}