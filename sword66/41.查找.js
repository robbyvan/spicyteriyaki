function Find(target, nums) {
  if (nums.length === 0 || nums[0].length === 0) {
    return false;
  }

  let i = 0;
  let j = nums[0].length - 1;

  while (i < nums.length && j >= 0) {
    if (nums[i][j] === target) {
      return true;
    }
    if (nums[i][j] > target) {
      j -= 1;
    } else {
      i += 1;
    }
  }

  return false;
}