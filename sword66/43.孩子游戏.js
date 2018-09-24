function LastRemaining_Solution(n, m) {
  if (n < 1) {
    return -1;
  }
  let children = [];
  for (let i = 0; i < n; ++i) {
    children.push(i);
  }

  let remain = [-1];
  let start = 0;

  while (children.length) {
    const out = (start + m - 1) % n;
    remain = children.splice(out, 1);
    n -= 1;
    start = out;
  }

  return remain[0];
}

let r = LastRemaining_Solution(3, 2);
console.log(r);