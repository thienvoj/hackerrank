// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(a) {
    // Complete this function
    let sum = 0;

    for (let i = 0, j = a.length -1; i < a.length; i++, j--){
        sum += a[i][i] - a[i][j];
    }

    return Math.abs(sum);
}