// new: 新对象 -> 获得构造函数 -> 绑定原型 -> 执行构造函数 -> 返回一个对象
function generate() {
  const obj = new Object();
  // 获得构造函数
  const argArray = Array.prototype.slice.apply(arguments);
  const Constructor = argArray.shift();
  // 绑定prototype
  obj.__proto__ = Constructor.prototype;
  // 绑定this, 执行构造函数内部
  const result = Constructor.apply(obj, argArray);
  // 返回obj
  return typeof result === 'object' ? result : obj;
}


// test
function Person(name) {
  this.name = name;
}

const p = generate(Person, 'Jack');
console.log(p);
