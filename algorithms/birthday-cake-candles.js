// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(n, ar) {
    // Complete this function
    let max = Math.max(...ar);
    let result = ar.filter(c => c === max);

    return result.length;
}