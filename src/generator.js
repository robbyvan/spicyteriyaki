function* hello() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

const h = hello();
console.log(h);
console.log(h.next());
console.log(h.next());
console.log(h.next());
console.log(h.next());

// for-of
for (let h of hello()) {
  console.log(h);
}

// 数列
function* fibonacci(i) {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  if (n > 50) {
    break;
  }
  console.log(n);
}

//

