function match(s, pattern) {
  const m = s.length;
  const n = pattern.length;

  let opt = [];
  for (let i = 0; i < m + 1; ++i) {
    opt[i] = [];
    for (let j = 0; j < n + 2; ++j) {
      opt[i][j] = false;
    }
  }

  opt[0][0] = true;
  opt[0][1] = true;
  for (let j = 0; j < n; ++j) {
    if (pattern[j] === '*') {
      opt[0][j + 2] = opt[0][j];
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (s[i] === pattern[j] || pattern[j] === '.') {
        opt[i + 1][j + 2] = opt[i][j + 1];
      }
      if (pattern[j] === '*') {
        if (pattern[j - 1] === s[i] || pattern[j - 1] === '.') {
          opt[i + 1][j + 2] = opt[i][j + 2] || opt[i + 1][j + 1] || opt[i + 1][j];
        } else {
          opt[i + 1][j + 2] = opt[i + 1][j];
        }
      }
    }
  }
  return opt[m][n + 1];
}
