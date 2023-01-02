function solution(people, limit) {
  let answer = 0;
  people.sort(function (a, b) {
    return a - b;
  });

  let j = people.length - 1;
  for (let i = 0; i <= j; j--) {
    if (people[i] + people[j] <= limit) {
      answer++;
      i++;
    } else {
      answer++;
    }
  }

  return answer;
}
console.log(solution([70, 50, 80, 50], 100));
//3
