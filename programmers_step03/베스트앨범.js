function solution(genres, plays) {
  var answer = [];
  let obj = {};
  let totalcnt = {};
  for (let i = 0; i <= genres.length - 1; i++) {
    if (!obj[genres[i]]) {
      obj[genres[i]] = [[i, plays[i]]];
      totalcnt[genres[i]] = plays[i];
    } else {
      obj[genres[i]].push([i, plays[i]]);
      totalcnt[genres[i]] += plays[i];
    }
  }

  // 객체에 장르별 총 재생횟수를 구하기
  // 장르별로 재생횟수와 인덱스를 쌍으로 갖는 프로퍼티추가

  let total = [];
  let best = [];

  for (let genres in totalcnt) {
    total.push([genres, totalcnt[genres]]);
  } //장르별 총 재생횟수 2차원배열로 변경

  for (let genres in obj) {
    best.push([genres, obj[genres]]);
  } //장르별, 인덱스와 재생횟수 쌍으로 3차원...? 배열로 변경

  total.sort((a, b) => b[1] - a[1]);
  // 장르별 총 재생횟수를 기준(인덱스1)으로 정렬

  for (let i = 0; i <= total.length - 1; i++) {
    let filterd = best.filter(el => el[0] == total[i][0])[0][1];

    // 장르별 총 재생횟수 순으로 for문 실행             -> i번째 장르명인 놈들만 필터해서 반환받고
    // 필터링해서 받은 값의 [0][1]인덱스를 적재
    // (불필요한부분 다 깎고 인덱스,재생횟수만 쌍으로 묶인 2중배열로 만들기)

    filterd.sort((a, b) => b[1] - a[1]);
    //재생횟수를(각 배열 인덱스1) 기준으로 정렬

    if (filterd.length === 1) {
      answer.push(filterd[0][0]);
    } else if (filterd.length > 1) {
      answer.push(filterd[0][0]);
      answer.push(filterd[1][0]);
    }
  }

  return answer;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500],
  ),
);

//[4, 1, 3, 0]
