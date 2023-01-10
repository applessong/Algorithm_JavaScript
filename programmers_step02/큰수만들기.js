function solution(number, k) {
  var answer = "";
  let numberArr = number.split("");
  let checked = [];
  checked.push(numberArr.shift());
  let i = 0;
  while (k) {
    if (checked[checked.length - 1] >= numberArr[i] || checked.length == 0) {
      checked.push(numberArr[i]);
      i++;
    } else {
      checked.pop();
      k--;
    }
  }
  numberArr = numberArr.splice(i, numberArr.length);
  return checked.join("") + numberArr.join("");
}

// function solution(number, k) {
//   var answer = "";

//   let numberArr = number.split("");
//   let checked = [];

//   while (k) {
//     if (
//       numberArr.length > 0 &&
//       (checked[checked.length - 1] >= numberArr[0] || checked.length == 0)
//     ) {
//       checked.push(numberArr.shift());
//     } else {
//       checked.pop();
//       k--;
//     }
//   }

//   return checked.join("") + numberArr.join("");
// }            // 시간초과나는 코드     // 내가 짠 코드 아닌거같은데...?

console.log(solution("1924", 2));
//"94"
console.log(solution("1231234", 3));
//"3234"
console.log(solution("4177252841", 4));
//"775841"
