function GetUglyNumber_Solution(index) {
  if (index < 7) {
    return index;
  }
  let p2 = 0, p3 = 0, p5 = 0, newNum = 1;
  let nums = [];
  nums.push(newNum);

  while (nums.length < index) {
    const mult2 = nums[p2] * 2;
    const mult3 = nums[p3] * 3;
    const mult5 = nums[p5] * 5;
    newNum = Math.min(mult2, Math.min(mult3, mult5));
    switch (newNum) {
      case mult2:
        p2 += 1;
        break;
      case mult3:
        p3 += 1;
        break;
      case mult5:
        p5 += 1;
        break;
    }
    if (newNum !== nums[nums.length - 1]) {
      nums.push(newNum);
    }
  }

  return newNum;
}

// getUglyNumber(7);