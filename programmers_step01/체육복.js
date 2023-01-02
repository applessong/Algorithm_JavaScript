function solution(n, lost, reserve) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (!lost.includes(i) && !reserve.includes(i)) {
      answer++;
    }
  }

  lost.sort((a, b) => a - b);
  //   reserve.sort((a, b) => a - b);
  // 도난학생도 아니고 여벌보유학생도 아닌 학생 수 answer에 적재

  for (let i = 0; i <= lost.length - 1; i++) {
    if (reserve.includes(lost[i])) {
      answer++;
      reserve = reserve.filter(a => a !== lost[i]);
      lost = lost.filter(a => a !== lost[i]);
      i--;
    }
  }
  // 여벌보유중인 학생 중 한벌을 도난단한 학생을 answer에 한명으로 적재
  //그리고 각 목록에서 제외하기
  answer += reserve.length;
  for (let i = 0; i <= lost.length; i++) {
    if (reserve.includes(lost[i] - 1)) {
      answer++;
      reserve = reserve.filter(a => a !== lost[i] - 1);
    } else if (reserve.includes(lost[i] + 1)) {
      answer++;
      reserve = reserve.filter(a => a !== lost[i] + 1);
    }
  }
  //reserve에 lost+-1이 있으면 lost도 체육복을 빌릴 수 있으므로 answer+1
  //그리고 해당 학생은 이미 다른학생 빌려줬으므로 reserve에서 삭제

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
