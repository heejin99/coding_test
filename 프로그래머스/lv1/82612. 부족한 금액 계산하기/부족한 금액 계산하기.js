function solution(price, money, count) {
    let totalPrice = 0;
    
    for (let i = 1; i < count + 1; i++) {
        totalPrice += i * price;
    }

    return totalPrice - money > 0 ? totalPrice - money : 0;
}