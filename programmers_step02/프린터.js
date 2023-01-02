function solution(priorities, location) {
  var answer = 0;
  let index = [];
  for (let i = 0; i < priorities.length; i++) {
    index.push(i);
  }
  while (priorities[0]) {
    if (priorities[0] < Math.max(...priorities)) {
      priorities.push(priorities.shift());
      index.push(index.shift());
    } else {
      if (index[0] == location) {
        answer++;
        return answer;
      } else {
        answer++;
        priorities.shift();
        index.shift();
      }
    }
  }
  return answer;
}

console.log(solution([2, 1, 3, 2], 2));
//1
console.log(solution([1, 1, 9, 1, 1, 1], 0));
//5
