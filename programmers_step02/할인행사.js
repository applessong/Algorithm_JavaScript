function solution(want, number, discount) {
  var answer = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    let minusCnt = want.length;
    let cuted = discount.slice(i, i + 10);

    for (let j = 0; j <= want.length - 1; j++) {
      let filteredArr = cuted.filter(el => el === want[j]);
      if (filteredArr.length !== number[j]) {
        break;
      }
      minusCnt--;
    }

    if (minusCnt === 0) {
      answer++;
    }
  }
  return answer;
}
console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ],
  ),
);
//3

console.log(
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ],
  ),
);
//0
