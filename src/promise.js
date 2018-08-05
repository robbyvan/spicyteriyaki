const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function Promise(fn) {
  let state = PENDING;
  let value = null;
  let handlers = [];

  // 状态: fulfill
  function fulfill(result) {
    state = FULFILLED;
    value = result;
    handlers.forEach(handle); // 保存callback
    handlers = null;
  }

  // 状态: reject;
  function reject(error) {
    state = REJECTED;
    value = error;
    handlers.forEach(handle);
    handlers = null;
  }

  // 状态转移
  function resolve(result) {
    try {
      const then = getThen(result); // 如果result是promise, 获取其then
      if (then) {
        // 如果还有then, 在其Execution Context下执行then
        doResolve(then.bind(result), resolve, reject);
        return;
      }
      fulfill(result);
    } catch (e) {
      reject(e);
    }
  }

  function getThen(value) {
    var t = typeof value;
    if (value && (t === 'object' || t === 'function')) {
      const then = value.then;
      if (typeof then === 'function') {
        return then;
      }
    }
    return null;
  }

  // 设置外层done状态, 保证onFulfilled, onRejected在多次[将被调用]时, 检查done, 确保只能被调用1次
  function doResolve(fn, onFulfilled, onRejected) {
    let done = false;
    try {
      fn(function(value) {
        if (done) {
          return;
        }
        done = true;
        onFulfilled(value);
      }, function(reason) {
        if (done) {
          return;
        }
        done = true;
        onRejected(reason);
      });
    } catch(ex) {
      if (done) {
        return;
      }
      done = true;
      onRejected(ex);
    }
  }

  function handle(handler) {
    if (state === PENDING) {
      handlers.push(handler);
    } else {
      if (state === FULFILLED &&
        typeof handler.onFulfilled === 'function') {
        handler.onFulfilled(value);
      }
      if (state === FULFILLED &&
        typeof handler.onRejected === 'function') {
        handler.onRejected(value);
      }
    }
  }

  // Observing (via.done)
  this.done = function(onFulfilled, onRejected) {
    setTimeout(function() {
      handle({
        onFulfilled: onFulfilled,
        onRejected: onRejected
      });
    }, 0);
  }

  // Observing (via .then)
  this.then = function(onFulfilled, onRejected) {
    const self = this;
    return new Promise((resolve, reject) => 
      self.done(result => {
        if (typeof onFulfilled === 'function') {
          try {
            return resolve(onFulfilled(result));
          } catch(ex) {
            return reject(ex);
          }
        } else {
          return resolve(result);
        }
      }, function(err) {
        if (typeof onRejected === 'function') {
          try {
            return resolve(onRejected(err));
          } catch(ex) {
            return reject(ex);
          }
        }
      })
    );
  }

  doResolve(fn, resolve, reject);
}
