function calcFibo(n) {
  if (n <= 0) {
    return 0;
  }

  if (n < 3) {
    return 1
  }

  const memo = [1, 1];
  for (let i = 2; i < n; ++i) {
    memo.push(memo[i - 1], memo[i - 2]);
  }

  return memo[n - 1];
}