function solution(num) {
  var answer = 0;
  let j = 1;
  for (let i = 1; i <= num; i++) {
    let isThree = String(i).includes(3);
    if (i % 3 == 0 || isThree) {
      num++;
    }
  }
  return num;
}
console.log(solution(40));
//76
