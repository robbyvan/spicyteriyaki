function minNumberInRotateArray(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    }

    if (nums[mid] >= nums[right]) {
      left = mid + 1;
    } else  {
      right = mid - 1;
    }
  }

  return nums[mid];
}

// minNumberInRotateArray([3, 4, 5, 6, 1, 2]);