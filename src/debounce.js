// function debounce(func, delay) {
//   let timer;
//   return function() {
//     const context = this;
//     const args = arguments;

//     if (timer) {
//       clearTimeout(timer);
//     }
//     setTimeout(function() {
//       return func.apply(context, args);
//     }, delay);
//   }
// }

import _ from 'lodash';

export default function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function() {
    let last = _.now() - timestamp; // timestamp 是随时更新着的, 记录了上一次调用的时间(包括被timer屏蔽掉的触发)
    if (last < wait && last >= 0) {
      // 如果当前调用距离上一次的时间间隔小于了[还需要等待的时间]要求, 修正timeout的等待时间为差值
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if(!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  }

  return function() {
    context = this;
    args = arguments;

    timestamp = _.now(); // 记录本次调用发生的时刻
    let callNow = immediate && !timeout; // 如果要求立即执行, 且没有timer
    if (!timeout) { // 如果没有timer, 就设置一个新的, 延迟时间到了以后调用later: 所以later中应该调用并clear掉timer
      timeout = setTimeout(later, wait);
    }
    if (callNow) { // callNow, 立即执行一次
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}

function component() {
  // const div = document.createElement('div');

  const print = () => {
    console.log('triggered', _.now());
  }

  const btn = document.createElement('button');

  btn.innerHTML = 'click';
  btn.addEventListener('click', debounce(print, 1000, true));

  return btn;
}

// document.body.appendChild(component());