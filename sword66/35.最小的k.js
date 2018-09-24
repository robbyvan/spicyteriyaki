function GetLeastNumbers_Solution(input, k) {
  if (k > input.length) {
    return [];
  }

  const sorted = quickSort(input);
  return sorted.slice(0, k);
}

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


// let r = GetLeastNumbers_Solution([1, 4, 5, 2, 3, 7, 8, 6], 5);
// console.log(r);