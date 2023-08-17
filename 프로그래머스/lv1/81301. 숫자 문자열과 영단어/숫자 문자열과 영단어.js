function solution(s) {
    let splitWord = s;
    const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for (let i = 0; i < words.length; i++) {
        let arr = splitWord.split(words[i]);
        splitWord = arr.join(i);
    }
    
    return Number(splitWord);
}