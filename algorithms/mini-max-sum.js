function miniMaxSum(arr) {
    // Complete this function
    let min = 0,
      max = 0,
      sum = 0;

    arr.sort((a,b) => a-b);
    sum = arr.reduce((acc, cur) => acc += cur);
    min = sum - arr[arr.length - 1];
    max = sum - arr[0];

    return [min, max];
}