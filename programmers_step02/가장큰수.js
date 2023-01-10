function solution(numbers) {
  var answer = "";
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    arr.push(String(numbers[i]));
  }
  arr = arr.sort((a, b) => b + a - (a + b));
  if (arr[0] == 0) {
    return "0";
  }
  return arr.join("");
}

console.log(solution([6, 10, 2]));
//"6210"
console.log(solution([3, 30, 34, 5, 9]));
//"9534330"
