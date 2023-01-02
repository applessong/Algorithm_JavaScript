function solution(numbers, target) {
  var answer = 0;
  dfs(numbers, numbers[0], 0, target);
  dfs(numbers, -1 * numbers[0], 0, target);
  function dfs(numbers, num, depth, target) {
    if (depth == numbers.length - 1) {
      if (num == target) {
        answer++;
      }
      return;
    }
    dfs(numbers, num + numbers[depth + 1], depth + 1, target);
    dfs(numbers, num - numbers[depth + 1], depth + 1, target);
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
//5
console.log(solution([4, 1, 2, 1], 4));
//2
