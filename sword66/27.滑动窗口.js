function maxSlidingWindow(nums, k) {
  let res = [];
  let q = [];

  for (let i = 0; i < nums.length; ++i) {
    while (q.length && nums[i] > q[q.length - 1]) {
      q.pop();
    }

    q.push(nums[i]);

    const startIndex = i - k + 1;

    // If window isn't fully overlapping nums, don't yet know the first max
    if (startIndex < 0) {
      continue;
    }

    res.push(q[0]);

    // 去重
    if (nums[startIndex] === q[0]) {
      q.shift();
    }
  }

  return res;
}
