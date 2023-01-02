function solution(number, limit, power) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 0; j * j <= i; j++) {
      if (j * j == i) {
        cnt++;
      } else if (i % j == 0) {
        cnt += 2;
      }
    }
    if (cnt > limit) {
      cnt = power;
    }
    answer += cnt;
  }
  return answer;
}
console.log(solution(10, 3, 2));
//21
