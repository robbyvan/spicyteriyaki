function findUnique(s) {
  let q = [];
  let map = {};

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];

    if (map[char] === undefined) {
      map[char] = 0;
      q.push(i);
    }

    map[char] += 1;
  }

  while (q.length > 0 && map[s[q[0]]] > 1) {
    q.shift();
  }

  return q.length > 0 ? q[0] : -1;
}