function printList(list) {
  if (list === null) {
    return list;
  }

  const result = [];
  let pos = list;
  while (pos) {
    result.unshift(pos.val);
    pos = pos.next;
  }
  return result;
}