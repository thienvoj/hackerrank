// https://www.hackerrank.com/challenges/camelcase

function camelcase(s) {
    // Complete this function
    let counter = 1;

    for (let i = 0, len=s.length; i < len; i++) {
        if (s[i] === s[i].toUpperCase()) {
          counter++;
        }
    }

    return counter;
}