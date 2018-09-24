/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; ++i) {
    const x = target - nums[i];
    if (map[x] !== undefined) {
      return [map[x], i];
    }
    map[nums[i]] = i;
  }
  return false;
}