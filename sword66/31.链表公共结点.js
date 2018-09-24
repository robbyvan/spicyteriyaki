function findFirstCommonNode(head1, head2) {
  let p1 = head1;
  let p2 = head2;

  while (p1 !== p2) {
    if (p1 !== null) {
      p1 = p1.next;
    }
    if (p2 !== null) {
      p2 = p2.next;
    }
    if (p1 !== p2) {
      if (p1 === null) {
        p1 = head2;
      }
      if (p2 === null) {
        p2 = head1;
      }
    }
  }

  return p1;
}