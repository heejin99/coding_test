function solution(s) {
    return s.split(" ").map((str) => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()).join(" ");
}