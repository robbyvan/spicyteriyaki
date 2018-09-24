function invertTree(root) {
  if (root === null) {
    return root;
  }

  temp = root.left;
  root.left = root.right;
  root.right = temp;

  if (root.left !== null) {
    invertTree(root.left);
  }
  if (root.right !== null) {
    invertTree(root.right);
  }

  return root;
}
