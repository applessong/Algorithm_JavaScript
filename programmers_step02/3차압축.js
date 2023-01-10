function solution(msg) {
  let dict = {};
  for (let i = 65; i < 91; i++) {
    dict[String.fromCharCode(i)] = i - 64;
  }

  let answer = [];
  let word = msg[0];
  let j = 1;
  let lastCount = 27;
  for (let i = 0; i < msg.length; ) {
    if (dict[word]) {
      //해당단어가 있음
      word += msg[j];
      j++; //뒤에 글자 붙여주고 다음 순회로
    } else {
      //해당단어가 없음
      dict[word] = lastCount++;
      let str = word.substr(0, word.length - 1);
      answer.push(dict[str]);
      //마지막 글자 추가하기전의 단어를 answer에 추가
      i = j - 1; //다음 순회를 answer에 추가한 단어 직후의 단어로 설정
      word = msg[i]; //해당단어 사전에 추가
    }
  } //start point를 외부에서 변수로 선언하고 내부에서 증감식 써주는 방법으로 가독성 개선 가능

  return answer;
}

// ????????????? 프로그래머스에 남은 풀이 그대로 썼는데 통과안됨; 왜이러냐
// 박사님이랑 코드 리팩토링 하다가 좀 꼬인거같은데... = _=하...

// console.log(solution("KAKAO"));
//[11, 1, 27, 15]

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
//[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]

// console.log(solution("ABABABABABABABAB"));
// //[1, 2, 27, 29, 28, 31, 30]
