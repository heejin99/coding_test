function solution(n) {
    let answer = 0;
    let i = n + 1;
    
    while (true) {
        let nOneCnt = n.toString(2).split("1").length - 1;
        let iOneCnt = i.toString(2).split("1").length - 1;
        
        if (nOneCnt === iOneCnt) {
            answer = i;
            break;
        }
        
        i += 1;
    }
    
    return answer;
}