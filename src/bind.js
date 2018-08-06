Function.prototype.myBind = function(context) {
  // 要求绑定在函数上
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  // 函数 & 参数
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);

  return function F() {
    if (this instanceof F) {
      // 可以new
      return new self([...args, ...arguments]);
    }
    return self.apply(context, [...args, ...arguments]);
  }
}