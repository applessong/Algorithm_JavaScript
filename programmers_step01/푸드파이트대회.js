function solution(food) {
  var answer = '';
  let str = '';
  for (let i = 1; i < food.length; i++) {
    if (food[i] / 2 >= 1) {
      answer += String(i).repeat(Math.floor(food[i]) / 2);
    }
  }
  str = answer.split('').reverse().join('');
  answer = answer + '0' + str;
  return answer;
}
function solution(food) {
  var answer = '';
  let str = '';
  for (let i = 1; i < food.length; i++) {
    if (food[i] / 2 >= 1) {
      answer += String(i).repeat(Math.floor(food[i]) / 2);
    }
  }
  str = answer.split('').reverse().join('');
  answer = answer + '0' + str;
  return answer;
}

console.log([1, 3, 4, 6]);
//"1223330333221"
console.log([1, 7, 1, 2]);
//"111303111"
