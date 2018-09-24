function NumberOf1Between1AndN_Solution(n) {
  if (n < 1) {
    return 0;
  }

  let count = 0;

  for (let i = 1; i <= n; ++i) {
    let num = i;
    while (num > 0) {
      if (num % 10 === 1) {
        count += 1;
      }
      num = Math.floor(num / 10);
    }
  }

  return count;
}
