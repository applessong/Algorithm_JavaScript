function solution(progresses, speeds) {
  var answer = [];
  let day = 1;
  let dist = 0;
  while (progresses[0]) {
    if (progresses[0] + speeds[0] * day >= 100) {
      dist++;
      progresses.shift();
      speeds.shift();
    } else {
      if (dist > 0) {
        answer.push(dist);
      }
      day++;
      dist = 0;
    }
  }
  answer.push(dist);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
//[2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
//[1, 3, 2]
