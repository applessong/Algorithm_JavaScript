function solution(brown, yellow) {
  var answer = [];
  let yellowHigth = [];
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i == 0) {
      if (i <= yellow / i) {
        yellowHigth.push([i, yellow / i]);
      } else {
        break;
      }
    }
  }
  for (let i = 0; i < yellowHigth.length; i++) {
    if ((yellowHigth[i][0] + 2) * (yellowHigth[i][1] + 2) == brown + yellow) {
      answer = [yellowHigth[i][1] + 2, yellowHigth[i][0] + 2];
    }
  }
  return answer;
}

console.log(solution(10, 2));
//[4, 3]
console.log(solution(8, 1));
//[3, 3]
console.log(solution(24, 24));
//[8, 6]
