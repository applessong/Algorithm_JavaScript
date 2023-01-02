function solution(n, left, right) {
  let answer = [];
  for (let i = left; i <= right; i++) {
    let x = i % n;
    let y = Math.floor(i / n);
    answer.push(Math.max(x, y) + 1);
  }
  return answer;
}

console.log(solution(3, 2, 5));
//[3,2,2,3]
console.log(solution(4, 7, 14));
//[4,3,3,3,4,4,4,4]
