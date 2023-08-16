function solution(sizes) {
    let short = 0;
    let long = 0; 
    for (let i of sizes) {
        if (i[0] < i[1]) { // 세로가 더 긴 경우
            if (long < i[1]) long = i[1];
            if (short < i[0]) short = i[0];
        } else { // 가로가 더 긴 경우
            if (long < i[0]) long = i[0];
            if (short < i[1]) short = i[1];
        }
    }
    return short * long;
}