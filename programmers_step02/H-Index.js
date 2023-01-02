function solution(citations) {
  var answer = 0;
  let max = Math.max(...citations);
  for (let i = 0; i < max; i++) {
    let arr = citations.filter(el => el >= i);
    if (arr.length >= i) {
      answer = i;
    } else {
      break;
    }
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
//3

// function solution(citations) { //다른사람풀이 더빠름. 훨씬빠름
//      citations = citations.sort(sorting);
//      var i = 0;
//      while(i + 1 <= citations[i]){
//          i++;
//      }
//      return i;

//      function sorting(a, b){
//          return b - a;
//      }
// }
