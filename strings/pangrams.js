// https://www.hackerrank.com/challenges/pangrams/problem

function pangrams(s) {
  s = s.toLowerCase();
  let letters = {},
    result = "";

  for (let chr of s) {
    if (!letters[chr] && chr !== " ") {
      letters[chr] = chr;
    }
  }

  if (Object.keys(letters).length === 26) {
    result = "pangram";
  } else {
    result = "not pangram";
  }

  return result;
}
