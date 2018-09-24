function spiralOrder(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  let result = [];

  while (matrix.length > 0) {
    // 上
    result = result.concat(matrix.shift());
    // 右
    if (matrix.length > 0 && matrix[0].length > 0) {
      for (let row of matrix) {
        result.push(row.pop());
      }
    }
    // 下
    if (matrix.length > 0) {
      result = result.concat(matrix.pop().reverse())
    }
    // 左
    if (matrix.length > 0 && matrix[0].length > 0) {
      let col = [];
      for (let row of matrix) {
        col.push(row.shift());
      }
      result = result.concat(col.reverse());
    }
  }

  return result;
} 

// let r = spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);
// console.log(r);