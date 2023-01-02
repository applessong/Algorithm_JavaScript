function solution(n) {
  let fibonacci = new Array(n + 1);
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  let answer = 0;
  let num = 1234567;
  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 1] % num) + (fibonacci[i - 2] % num);
  }
  return fibonacci[n] % num;
}
console.log(solution(3)); //2
console.log(solution(5)); //5
