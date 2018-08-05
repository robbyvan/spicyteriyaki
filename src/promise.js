// 场景: 
// 1.http.get用户id <=> { promise包裹的[ resolve, reject包裹的 (异步动作fn) ] }
// fn完成 => 结果出现到then? 定义的fn的异步调用resolve
// 2.然后用用户id do sth. => 本来在回调里的部分写到then中: 处理异步结果函数(cb)

function Promise(fn) {
  var value = null,
      cbs = [];

  this.then = function(onFulfilled) {
    cbs.push(onFulfilled);
    return this; // 支持链式调用then
  }

  function resolve(value) {
    // 利用setTimeout, 防止在then注册完之前, 同步函数的resolve已经执行了
    setTimeout(function() {

      cbs.forEach(function(cb) {
        cb(value);

      });
    }, 0)
  }
  // 引入promise, 写成fn(resolve)结构.
  // fn是异步的, fn自己的异步回调里面使用传入的resolve.
  fn(resolve);
}

// 问题: Promise异步函数, 异步成功之前注册的cb会执行, 但是之后cb的不会再执行了 => 引入Promise States解决

function Promise(fn) {
  var state = 'pending', // 加入state
      value = null,
      cbs = [];

  this.then = function(onFulfilled) {
    // 引入状态判断
    if (state === 'pending') {
      cbs.push(onFulfilled);
      return this; // 支持链式调用  
    }
    // 如果异步resolve了, 之后的回调都是利用newValue立即执行
    onFulfilled(value);
    return this;
  }

  function resolve(newValue) {
    // 引入value, state保存状态
    value = newValue;
    state = 'fulfilled';

    // 利用setTimeout, 防止在then注册完之前, 同步函数的resolve已经执行了
    setTimeout(function() {

      cbs.forEach(function(cb) {
        cb(value);

      });
    }, 0)
  }
  // 引入promise, 写成fn(resolve)结构.
  // fn是异步的, fn自己的异步回调里面使用传入的resolve.
  fn(resolve);
}


// then里面注册链式调用promise ? => 在then中return一个promise.

function Promise(fn) {
  var state = 'pending', // 加入state
      value = null,
      cbs = [];

  this.then = function(onFulfilled) {
    return new Promise(function(resolve) {
      handle({
        onFulfilled: onFulfilled || null,
        resolve: resolve
      });
    });

    function handle(callback) {
      if (state === 'pending') {
        cbs.push(callback);
        return;
      }
      if (!callback.onFulfilled) {
        callback.resolve(value);
        return;
      }
      var ret = callback.onFulfilled(value);
      callback.resolve(ret);
    }
  }

  function resolve(newValue) {

    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (typeof then === 'function') {
        then.call(newValue, resolve);
        return;
      }
    }

    // 引入value, state保存状态
    value = newValue;
    state = 'fulfilled';

    // 利用setTimeout, 防止在then注册完之前, 同步函数的resolve已经执行了
    setTimeout(function() {
      cbs.forEach(function(cb) {
        cb(value);
      });
    }, 0)
  }
  // 引入promise, 写成fn(resolve)结构.
  // fn是异步的, fn自己的异步回调里面使用传入的resolve.
  fn(resolve);
}


// 引入reject
function Promise(fn) {
  var value = null,
      state = 'pending',
      cbs = [];

  this.then = function(onFulfilled, onRejected) {
    return new Promise((resolve, reject) => {
      handle({
        onFulfilled: onFulfilled || null,
        onRejected: onRejected || null,
        resolve: resolve,
        reject: reject
      });
    });
  }

  function handle(callback) {
    if (state === 'pending') {
      cbs.push(callback);
      return;
    }

    const cb = state === 'fulfilled' ? callback.onFulfilled : callback.onRejected;
    let ret;
    if (cb === null) {
      cb = state === 'fulfilled' ? callback.resolve : callback.reject;
      cb(value);
      return;
    }

    try {
      ret = cb(value);
      callback.resolve(ret);
    } catch (e) {
      callback.reject(e);
    } 
  }

  function reject(reason) {
    state = 'rejected';
    value = reason;
    execute();
  }

  function resolve(newValue) {
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (typeof then === 'function') {
        then.call(newValue, resolve);
        return;
      }
    }

    value = newValue;
    state = 'fulfilled';
    execute();
  }

  function execute() {
    setTimeout(function() {
      cbs.forEach(function(cb) {
        cb(value);
      });
    }, 0)
  }

  fn(resolve, reject);
}
