function solution(a, b, n) {
  var answer = 0;
  let swap = 0;
  let rest = 0;
  while (n >= a) {
    console.log(n);
    swap = Math.floor(n / a);
    rest = n % a;
    n = swap * b + rest;
    answer += swap * b;
  }
  return answer;
}
console.log(2, 1, 20);
//19
console.log(3, 1, 20);
//9
