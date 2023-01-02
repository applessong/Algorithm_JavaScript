function solution(array, commands) {
  var answer = [];

  for (let i = 0; i <= commands.length - 1; i++) {
    let startNum = commands[i][0] - 1;
    let endNum = commands[i][1];
    let pointNum = commands[i][2] - 1;

    let cuted = array.slice(startNum, endNum);
    cuted.sort((a, b) => a - b);
    answer.push(cuted[pointNum]);
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);

//[5, 6, 3]
