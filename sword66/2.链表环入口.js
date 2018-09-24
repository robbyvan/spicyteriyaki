function entryNode(head) {
  if (head === null || head.next === null) {
    return false;
  }

  let walk = head;
  let jump = head;

  while (jump && jump.next) {
    walk = walk.next;
    jump = jump.next;
    if (walk === jump) {
      jump = head;
      while (jump !== walk) {
        jump = jump.next;
        walk = walk.next;
      }
    }
  }

  return null;
}