function solution(n) {
  let answer = 0;
  let number = Number(
    n
      .split("")
      .sort((a, b) => b - a)
      .join(""),
  );
  let arr = Array(number + 1)
    .fill(true)
    .fill(false, 0, 2);
  let arr2 = [];
  for (let i = 2; i * i <= number; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= number; j += i) {
        arr[j] = false;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      arr2.push(String(i));
    }
  }

  let numbers = n.split("");
  for (let i = 0; i < arr2.length; i++) {
    let sum = arr2[i].length - 1;
    let num = new Array(...numbers);
    for (let j = 0; j < arr2[i].length; j++) {
      if (num.indexOf(arr2[i].charAt(j)) != -1) {
        num.splice(num.indexOf(arr2[i].charAt(j)), 1);
      } else {
        break;
      }
      if (sum == j) {
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution("17"));
//3
console.log(solution("011"));
// 2;
