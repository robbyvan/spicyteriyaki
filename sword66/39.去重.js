function duplicate(nums, duplication) {
  const map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (map.has(nums[i])) {
      duplication[0] = nums[i];
      return true;
    }
    map.set(nums[i], 1);
  }

  return false;
}

// let r = duplicate([2, 4, 3, 1, 4], []);
// console.log(r);