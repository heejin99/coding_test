function solution(s) {
    return s.split(" ").map((str) => str.replace(/\w/g, (st, idx) => idx === 0 ? st.toUpperCase() : st.toLowerCase())).join(" ");
}