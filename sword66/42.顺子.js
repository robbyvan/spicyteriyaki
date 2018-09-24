function IsContinuous(nums) {
  nums.sort((a, b) => a - b);
  const lastIndexZero = nums.lastIndexOf(0);
  if (lastIndexZero === 3) {
    return true;
  }
  const s = new Set([...nums.slice(lastIndexZero + 1)]);
  // console.log(s.size, lastIndexZero, nums.length)
  if (nums[4] - nums[lastIndexZero + 1] <= 4 && s.size === (nums.length - 1 - lastIndexZero)) {
    return true;
  }
  return false;
}

let r = IsContinuous([1, 0, 0, 0, 1]);
console.log(r);