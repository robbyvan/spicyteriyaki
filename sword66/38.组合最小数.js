function PrintMinNumber(nums) {
  if (nums.length === 0) {
    return '';
  }
  let strNums = nums.map(num => num.toString());
  strNums.sort((a, b) => (a + b) - (b + a));
  return strNums.join('');
}
