function Queue() {
  this.stack1 = [];
  this.stack2 = [];
}

Queue.prototype.push = function(item) {
  this.stack1.push(item);
  return this;
}

Queue.prototype.pop = function() {
  if (this.stack2.length > 0) {
    return this.stack2.pop();
  }
  while (this.stack1.length > 0) {
    this.stack2.push(this.stack1.pop());
  }
  return this.stack2.pop();
}

const q = new Queue();

q.push(1).push(2).push(3);
q.pop();
q.pop();
q.push(4);
q.pop();