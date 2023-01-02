function solution(participant, completion) {
  var answer = '';
  participant.sort();
  completion.sort();
  for (var i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) {
      break;
    }
  }
  answer = participant[i];
  return answer;
}

console.log(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);
//"mislav"
