// https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(s) {
    let counter = 0;

    for (let i = 0, len=s.length; i < len; i += 3) {
      if (s[i] !== 'S') {
        counter++;
      }

      if (s[i + 1] !== 'O') {
        counter++;
      }

      if (s[i + 2] !== 'S') {
        counter++;
      }
    }

    return counter;
  }