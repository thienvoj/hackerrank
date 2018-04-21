// https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(n, ar) {
    // Complete this function
    return ar.reduce((acc, curr) => acc += curr);
}

const n = 5,
    arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
aVeryBigSum(n, arr);