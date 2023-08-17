function solution(brown, yellow) {
    const totalSize = brown + yellow;
    const answer = [];
    
    for (let height = 3; height <= brown; height++) {
        if (totalSize % height === 0) {
            let weight = totalSize / height;
            
            if ((height - 2) * (weight - 2) === yellow) {
                return [weight, height];
            }
        }
    }
    return answer;
}