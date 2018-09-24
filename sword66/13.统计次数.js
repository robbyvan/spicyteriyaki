function getNumberOfK(data, k) {
  return biSearch(data, k + 0.5) - biSearch(data, k - 0.5);
}

function biSearch(data, num) {
  let left = 0;
  let right = data.length - 1;

  while (left <= right) {
    const mid = left + (right - left) / 2;
    if (data[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}