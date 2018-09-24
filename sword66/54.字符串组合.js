function Permutation(s) {
  if (s.length === 0) {
    return [];
  }
  const sorted = s.split('').sort((a, b) => a - b);
  const res = [];
  helper(sorted, '', res);
  return res;
}

function helper(source, path, res) {
  if (source.length === 0) {
    res.push(path);
    return;
  }

  let prevChar = null;
  for (let i = 0; i < source.length; ++i) {
    const char = source[i];
    if (char === prevChar) {
      prevChar = char;
      continue;
    }
    const nextSource = source.slice(0, i).concat(source.slice(i + 1));
    helper(nextSource, path + char, res);
    prevChar = char;
  }
}

// let r = Permutation('aa');
// console.log(r);