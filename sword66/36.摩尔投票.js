function MoreThanHalfNum_Solution(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let val;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      val = num;
      count = 1;
    } else {
      if (num === val) {
        count += 1;
      } else {
        count -= 1;
      }
    }
  }

  const total = nums.reduce((total, item) => {
    if (item === val) {
      return total + 1;
    }
    return total;
  }, 0);

  return total * 2 > nums.length ? val : 0;
}