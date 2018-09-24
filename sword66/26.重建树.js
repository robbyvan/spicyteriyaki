function buildTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder.shift());
  const rootIndex = inorder.indexOf(root.val);

  root.left = buildTree(preorder, inorder.slice(0, rootIndex));
  root.right = buildTree(preorder, inorder.slice(rootIndex + 1));

  return root;
}