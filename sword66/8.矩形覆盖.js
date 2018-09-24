function rectCover(num) {
  if (num < 3) {
    return num;
  }

  const opt = [1, 2];

  for (let i = 3; i <= num; ++i) {
    opt[i] = opt[i - 1] + opt[i - 2];
  }

  return opt[num];
}