function hentaiJump(num) {
  if (num < 3) {
    return num;
  }

  const opt = [0, 1, 2];
  let prevSum = 3;

  for (let i = 3; i <= num; ++i) {
    opt[i] = prevSum + 1;
    prevSum = prevSum + opt[i];
  }

  return opt[num];
}