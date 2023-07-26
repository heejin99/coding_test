function solution(t, p) {
    var answer = 0;
    for (let i = 0; i < t.length; i++) {
        let tp = t.substr(i, p.length);
        if (tp.length >= p.length && tp <= p) {
            answer += 1;
        }
    }
    return answer;
}