function hasPath(matrix, rows, cols, path) {
  let flag = [];

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (helper(matrix, rows, cols, i, j, path, 0, flag)) {
        return true;
      }
    }
  }

  return false;
}

function helper(matrix, rows, cols, i, j, path, counter, flag) {
  const index = i * cols + j;
  if (i < 0 || i >= rows || j < 0 || j >= cols || matrix[index] !== path[counter] || flag[index] === 1) {
    // i越界, j越界, 字符不等, 已访问
    return false;
  }
  if (counter === path.length - 1) {
    return true;
  }
  flag[index] = 1;
  if ( helper(matrix, rows, cols, i - 1, j, path, counter + 1, flag)
    || helper(matrix, rows, cols, i + 1, j, path, counter + 1, flag)
    || helper(matrix, rows, cols, i, j - 1, path, counter + 1, flag)
    || helper(matrix, rows, cols, i, j + 1, path, counter + 1, flag)
  ) {
    return true;  
  }
  flag[index] = 0;
  return false;
}

let r = hasPath("ABCESFCSADEE", 3, 4,"SEE");
console.log(r);