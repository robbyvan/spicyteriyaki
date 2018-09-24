function str2Num(s) {
  let sign = 1;
  let flag = true;
  let result = null;

  if (s === '') {
    return 0;
  }

  for (let i = 0; i < s.length; ++i) {
    const char = s[i];
    if (char === '+' || char === '-') {
      if (flag) {
        pos = char === '-' ? -1 : 1;
        flag = false;
      } else {
        throw new Error('invalid string');
      }
    } else if (char >= '0' && char <= '9') {
      flag = false;
      if (result === null) {
        result = Number(char);
      } else {
        result = result * 10 + Number(char);
      }
    } else {
      throw new Error('invalid string');
    }
  }

  return result * sign;
}