// https://www.hackerrank.com/challenges/maximizing-xor

function maxXor(l, r) {
    let max = 0;

    for (let i = l; i <= r; i++)
      for (let j = i; j <= r; j++)
        max = Math.max(max, i ^ j);

    return max;
}