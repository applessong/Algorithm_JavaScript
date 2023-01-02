function solution(X, Y) {
  // let arr = new Array(10);
  X = X.split('');
  Y = Y.split('');
  let Xarr = X.map(i => Number(i));
  let Yarr = Y.map(i => Number(i));

  var answer = '';
  for (let i = 9; i >= 0; i--) {
    let a = Xarr.filter(a => a == i);
    let b = Yarr.filter(a => a == i);
    let num = Math.min(a.length, b.length);
    if (num != 0) {
      answer += i.toString().repeat(num);
    }
  }
  if (answer == '' || answer == null) {
    answer = '-1';
  } else if (Number(answer) == 0) {
    answer = '0';
  }
  return answer;
}

console.log(solution('5525', '1255'));
//552
