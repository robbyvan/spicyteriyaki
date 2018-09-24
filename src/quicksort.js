function quickSort(nums) {
  if (nums.length === 0) {
    return [];
  }

  let left = [];
  let right = [];
  const base = nums[0];

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < base) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return quickSort(left).concat(base, quickSort(right));
}
