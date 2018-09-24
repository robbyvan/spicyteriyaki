function getNext(node) {
  if (node === null) {
    return null;
  }

  if (node.right !== null) {
    temp = node.right;
    while (temp.left !== null) {
      temp = temp.left;
    }
    return temp;
  }

  p = node.parent;
  while (p !== null && p.right === node) {
    node = p;
    p = p.parent;
  }
  return p;
}