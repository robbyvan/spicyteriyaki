function deepClone(data) {
  let obj;
  const type = Object.prototype.toString.call(data);
  if (type === '[object Array]') {
    obj = [];
    for (let i = 0; i < data.length; ++i) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === '[object Object]') {
    obj = {};
    for (let key in data) {
      obj[key] = deepClone(data[key]);
    }
  } else {
    return data;
  }
  return obj;
}


// BFS for object
function deepClone(data) {
  const originQ = [data];
  const result = {};
  const resultQ = [result];

  const visitedOriginQ = [];
  const visitedResultQ = [];

  while (originQ.length > 0) {
    const _data = originQ.shift();
    visitedOriginQ.push(data);
    visitedResultQ.push(result);

    for (let key in _data) {
      const val = _data[key];
      if (Object.prototype.toString.call(val) !== '[object Object]') {
        result[key] = val;
      } else {
        const index = visitedOriginQ.indexOf(val);
        if (index > -1) {
          result[key] = visitedResultQ[index];
        } else {
          originQ.push(val);
          result[key] = {};
          resultQ.push(result[key]);
        }
      }
    }
  }

  return result;
}

b = {
  a: 1,
  b: [1, 2, {hi: 'hi'}],
}