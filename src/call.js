// 目的: 改变函数调用的this => 直接在context上调用函数(添加方法再删掉)
Function.prototype.myCall= function(context){
  let ctx = context || window;
  // 函数添加到ctx上
  ctx.fn = this; 
  const args = [...arguments].slice(1);
  // 调用, this是ctx
  const result = ctx.fn(...args);
  // 删掉
  delete context.fn;
  return result;
};

// test
sayHello.myCall(obj, argArr);