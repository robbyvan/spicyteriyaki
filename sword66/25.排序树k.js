function kthSmallest(root, k) { 
  const count = [0];
  const res = [];
  inOrder(root, count, k, res);
  return res[0];
}

function inOrder(node, count, k, res) {
  if (node === null || count[0] >= k) {
    return;
  }
  inOrder(node.left, count, k, res);
  count[0] += 1;
  if (count[0] === k) {
    res.push(node.val);
    return;
  }
  inOrder(node.right, count, k);
}