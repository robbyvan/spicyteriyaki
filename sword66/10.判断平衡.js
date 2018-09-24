function check(root) {
  if (!root) {
    return true;
  }

  return Math.abs(treeHeight(root.left) - treeHeight(root.right)) <= 1;
}

function treeHeight(root) {
  if (root === null) {
    return 0;
  }

  leftHeight = treeHeight(root.left);
  rightHeight = treeHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}