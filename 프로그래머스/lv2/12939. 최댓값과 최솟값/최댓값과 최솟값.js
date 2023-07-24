function solution(s) {
    const numList = s.split(" ").map(Number);
    
    const maxMinNum = [Math.min(...numList), Math.max(...numList)];

    const answer =  maxMinNum.join(" ");
    return answer;
}