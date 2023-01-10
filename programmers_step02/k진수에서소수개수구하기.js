// function solution2(n, k) {
//   var answer = 0;
//   let arr = n
//     .toString(k)
//     .split("0")
//     .filter((a) => a.length !== 0);
//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime(Number(arr[i]))) {
//       answer++;
//     }
//   }
//   return answer;
// }

function solution(n, k) {
  let arr = n.toString(k).split("0");
  // .filter((a) => a.length !== 0);
  return arr.filter(el => el !== "" && isPrime(Number(el))).length;
}

console.log(solution(437674, 3));
//3
console.log(solution(110011, 10));
//2

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
