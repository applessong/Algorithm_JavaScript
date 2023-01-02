function solution(babbling) {
  for (let i = 0; i < babbling.length; i++) {
    babbling[i] = babbling[i].replaceAll("aya", " ");
    babbling[i] = babbling[i].replaceAll("ye", " ");
    babbling[i] = babbling[i].replaceAll("woo", " ");
    babbling[i] = babbling[i].replaceAll("ma", " ");
    babbling[i] = babbling[i].trim();
  }

  return babbling.filter((a) => a.length == 0).length;
}
console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
