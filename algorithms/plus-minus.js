// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    // Complete this function
    let positive = 0,
      negative = 0,
      zero = 0;

    arr.map(item => {
        item === 0 ? zero++ : (item > 0 ? positive++ : negative++);
    })

    console.log((positive/arr.length).toFixed(6));
    console.log((negative/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}