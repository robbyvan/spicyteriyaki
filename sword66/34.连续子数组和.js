function findGreatestSumOfSubArray(nums) {
  if (nums.length <= 0) {
    return 0;
  }

  let opt = nums[0];
  let sum = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    sum = sum >= 0 ? sum + nums[i] : nums[i];
    opt = Math.max(opt, sum);
  }

  return opt;
}
