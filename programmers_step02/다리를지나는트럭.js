function solution(bridge_length, weight, ready_truck) {
  var answer = 0;
  let cross = [];
  let onBridgeTotalWeight = 0;
  while (ready_truck[0]) {
    answer++;
    if (bridge_length == cross.length) {
      onBridgeTotalWeight -= cross.shift();
    }
    if (onBridgeTotalWeight + ready_truck[0] > weight) {
      cross.push(null);
    } else {
      let first_truck = ready_truck.shift();
      cross.push(first_truck);
      onBridgeTotalWeight += first_truck;
    }
  }

  return answer + bridge_length;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
//8
console.log(solution(100, 100, [10]));
//101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
//110
