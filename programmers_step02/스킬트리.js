function solution(skill, skill_trees) {
  tree = skill_trees;

  for (let i = 0; i < skill_trees.length; i++) {
    let temp = [];

    for (let j = 0; j < skill_trees[i].length; j++) {
      let oderSkill = skill.includes(skill_trees[i][j]);
      if (oderSkill == true) {
        temp.push(skill_trees[i][j]);
      }
    }

    skill_trees[i] = temp.join("");
  }
  // => includes로 스킬순서에 있는 스킬들만 추출
  let arr = [];
  for (let i = 0; i < skill_trees.length; i++) {
    let temp = [];
    for (let j = 0; j < skill_trees[i].length; j++) {
      temp.push(skill.indexOf(skill_trees[i][j]));
    }
    arr.push(temp);
  }
  // => 각 스킬(알파벳)이 존재하는 인덱스 num확인 (순서대로 적재)
  // console.log(arr);
  let answer = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let k = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== k) {
        answer--;
        break;
      }
      k++;
    }
  }
  // => 스킬순서가 0부터 순차적으로 증가하는지 체크
  //     => 아니라면 총 스킬트리의 갯수에서 -1, 조건에 적합한 스킬트리의 갯수만 잔류
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
//2
