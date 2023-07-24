function solution(s) {
    const numList = s.split(" ");
    
    return Math.min(...numList) + " " + Math.max(...numList);
}