let flatten = arr => arr.reduce((result, item) => {
  Object.prototype.toString.call(arr[i]) === 'object Array' ?
  result.push(...flatten(arr[i])) :
  result.push(arr[i]);
  return result
}, []);

function flatten(arr) {
  const result = [];
  function flat(arr) {
    const len = arr.length;
    for (let i = 0; i < len; ++i) {
      if (Object.prototype.toString.call(arr[i]) === 'object Array') {
        flat(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }
  return result;
}

