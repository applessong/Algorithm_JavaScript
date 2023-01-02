function solution(k, score) {
  var arr = [];
  let answer = [];
  // let atLast = 0;
  for (let i = 0; i < score.length; i++) {
    if (arr.length < k) {
      arr.push(score[i]);
      arr.sort((a, b) => b - a);
      // atLast = arr.length - 1;
    } else if (arr[k - 1] < score[i]) {
      // atLast = arr.length - 1;
      arr.pop();
      arr.push(score[i]);
      arr.sort((a, b) => b - a);
    }
    answer.push(arr.at(-1));
  }
  return answer;
}
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
//[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
