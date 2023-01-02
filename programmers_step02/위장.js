function solution(clothes) {
  var answer = 1;
  let map = new Map();
  for (let i = 0; i <= clothes.length - 1; i++) {
    if (!map.has(clothes[i][1])) {
      map.set(clothes[i][1], 1);
      //eyewear가 없다면 이름이 eyewear인 Key와 값 1을 세팅
    } else if (map.has(clothes[i][1])) {
      map.set(clothes[i][1], map.get(clothes[i][1]) + 1);
      //이미 eyewear가 Key인 프로퍼티가 있다면 해당 Key의 값에 +1
    }
  }
  for (let [key, value] of map) {
    answer *= value + 1;
    //경우의 수를 모두 곱해주는데, 해당 부위를 안입은 경우도 존재하므로 1을 더해준 후 곱해줌
  }

  return answer - 1;
  //     반드시 최소한개 이상의 의상을 착용하므로 하나도 안입은 경우의 수 1을 빼주고 반환
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
);
//5

console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ]),
);
//3
