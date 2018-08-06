// 目的: 改变函数调用的this => 直接在context上调用函数(添加方法再删掉)
Function.prototype.myApply= function(context){
  let ctx = context || window;
  // 函数添加到ctx上
  ctx.fn = this; 
  
  // 根据是否有apply处理
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn();
  }
 
  // 删掉
  delete context.fn;
  return result;
};

// test
sayHello.myApply(obj, argArr);