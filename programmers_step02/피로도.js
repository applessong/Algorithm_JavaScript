function solution(k, dungeons) {
  var answer = 0;
  let visit = new Array(dungeons.length);
  //false로 세팅 안해줘도
  // undefined 자체에도 부정연산자가 먹힌다...??
  function dfs(remain, depth) {
    for (let i = 0; i < dungeons.length; i++) {
      if (remain >= dungeons[i][0] && !visit[i]) {
        visit[i] = true;
        dfs(remain - dungeons[i][1], depth + 1);
        visit[i] = false;
      }
    }
    answer = Math.max(depth, answer);
  }

  dfs(k, 0);

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ]),
);

//3
