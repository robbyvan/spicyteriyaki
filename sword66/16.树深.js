function treeDepth(root) {
  if (root === null) {
    return 0;
  }
  left = treeDepth(left);
  right = treeDepth(right);
  return Math.max(left, right) + 1;
}