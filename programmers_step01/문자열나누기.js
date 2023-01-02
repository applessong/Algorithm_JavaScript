function solution(s) {
  var answer = 0;
  if (s.length == 1) {
    return 1;
  }
  let first_point = 0;
  let equal = 1;
  let diff = 0;
  for (let i = 1; i <= s.length; i++) {
    if (s[first_point] === s[i]) {
      equal++;
    } else {
      diff++;
    }
    if (equal == diff) {
      equal = 1;
      diff = 0;
      answer++;
      i++;
      first_point = i;
    } else if (i === s.length) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("aaabbaccccabba"));
//3
