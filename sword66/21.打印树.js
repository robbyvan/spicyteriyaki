function printTree(root) {
  if (root === null) {
    return [];
  }

  let parentQ = [root];
  const childQ = [];
  let result = [];

  while (parentQ.length > 0) {
    for (let node of parentQ) {
      result.push(node.val);

      if (node.left) {
        childQ.push(node.left);
      }

      if (node.right) {
        childQ.push(node.right);
      }
    }

    parentQ = [...childQ];
    childQ.length = 0;
  }

  return result;
}