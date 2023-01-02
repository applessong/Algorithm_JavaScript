function solution(babbling) {
  var answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (
      babbling[i].includes('ayaaya') ||
      babbling[i].includes('mama') ||
      babbling[i].includes('woowoo') ||
      babbling[i].includes('yeye')
    ) {
      babbling[i] = 'kiki';
    }
    babbling[i] = babbling[i].replaceAll('aya', ' ');
    babbling[i] = babbling[i].replaceAll('ye', ' ');
    babbling[i] = babbling[i].replaceAll('woo', ' ');
    babbling[i] = babbling[i].replaceAll('ma', ' ');
    babbling[i] = babbling[i].trim();
  }
  for (let i = 0; i < babbling.length; i++) {
    if (!babbling[i].length) {
      answer++;
    }
  }
  return answer;
}
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));
//2
