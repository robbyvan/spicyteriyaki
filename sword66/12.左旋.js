function leftRotate(s, n) {
  if (s === '') {
    return s;
  }
  n = n % s.length;
  return s.slice(n) + s.substring(0, n);
}