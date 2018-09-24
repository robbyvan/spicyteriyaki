function findContinuousSequence(sum) {
  const result = [];

  for (let n = Math.floor(Math.sqrt(2 * sum)); n >= 2; --n) {
    if ((n & 1) === 1 && sum % n == 0 || (sum % n) * 2 == n) {
      const list = [];
      for (let i = 0, k = Math.floor((sum / n) - (n - 1) / 2); i < n; ++i, ++k) {
        list.push(k);
      }
      result.push(list);
    }
  }

  return result;
}