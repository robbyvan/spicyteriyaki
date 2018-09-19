function throttle(func, delay) {
  let prev = Date.now();
  return function() {
    const context = this;
    const args = arguments;
    const now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
}

function throttle(func, delay) {
  let prev = Date.now();
  return function() {
    const context = this;
    const args = [...arguments];
    const now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  }
}

function debounce(func, delay) {
  let timer;
  return function () {
    const context = this;
    const args = [...arguments];
    if (timer) {
      clearTimeout(timer);
    }
    setTimeout(() => {
      func.apply(context, args);
    }, delay);
  }
}