function solution(s) {
  let cnt = 0;
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === '(') {
      cnt++;
    } else if (s[i] === ')') {
      cnt--;
    }
    if (cnt < 0) {
      return false;
      break;
    }
  }

  return cnt === 0 ? true : false;
}
console.log(solution('()()')); //true
console.log(solution('(())()')); //true
console.log(solution(')()(')); //false
console.log(solution('(()(')); //false
