function solution(nums) {
  var answer = 0;
  let types = [...new Set(nums)];
  if (types.length > nums.length / 2) {
    answer = nums.length / 2;
  } else if (types.length <= nums.length / 2) {
    answer = types.length;
  }
  return answer;
}

console.log([3, 1, 2, 3]);
//2
console.log([3, 3, 3, 2, 2, 4]);
//3
