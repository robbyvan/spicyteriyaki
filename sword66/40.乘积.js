function multiply(nums) {
  let forward = [1];
  let res = 1;
  for (let i = 1; i < nums.length; ++i) {
    res = res * nums[i - 1];
    forward[i] = res;
  }

  let result = [];
  res = 1;
  for (let i = nums.length - 2; i > -1; --i) {
    res = res * nums[i + 1];
    result[i] = forward[i] * res;
  }
}

let r = multiply([1, 2, 3, 4]);
console.log(r);