function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => a - b);
  let round = Math.floor(score.length / m);
  for (let i = 0; i < round; i++) {
    let selection = score.splice(score.length - m, m);
    answer += Math.min(...selection) * m;
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
//8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
//33
