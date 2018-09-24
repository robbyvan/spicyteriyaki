function isSymmetric(root) {
  if (root === null) {
    return true;
  }
  return isMirror(root.left, root.right);
}

function isMirror(left, right) {
  if (left === null && right === null) {
    return true;
  }
  if (left === null || right === null) {
    return false;
  }
  if (left.val === right.val) {
    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }
  return false;
}