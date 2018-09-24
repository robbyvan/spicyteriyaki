function deleteDuplicates(head) {
  if (head === null) {
    return head;
  }

  let pos = head;
  let result = new ListNode(-1);
  let temp = result;
  let flag = false;

  while (pos !== null && pos.next !== null) {
    if (pos.val === pos.next.val) {
      flag = true;
      pos.next = pos.next.next;
    } else {
      if (flag) {
        flag = false;
      } else {
        temp.next = new ListNode(pos.val);
        temp = temp.next;
      }
      pos = pos.next;
    }
  }

  if (pos !== null && !flag) {
    temp.next = new ListNode(pos.val);
  }

  return result.next;
}