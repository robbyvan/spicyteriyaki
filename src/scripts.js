// 基本
const asyncAdd = (function() {
  const head = document.head;
  let script;
  return function(src) {
    script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
  }
})();

// 串行
function loadScript(url, callback) {
  const script = document.createElement('src');
  script.type = 'text/javascript';

  script.onload = function() {
    callback();
  }

  script.src = url;
  document.body.appendChild(script);
}

loadScript('./1.js', loadScript('./2.js', loadScript('./3.js')));

// 回调ugly
const loadJS = (function () {
  return function (url, callback) {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
    script.onload = function() {
      if (typeof callback !== 'function') {
        return;
      }
      callback();
    }
  }
})();

const commandJS = (function() {
  const group = [];
  let len = 0;

  function add() {
    for (let i = 0, js; js = arguments[i]; ++i) {
      group.push(js);
    }
    return this;
  }

  function isFinish() {
    len -= 1;
    if (len === 0) {
      exe();
    }
  }

  function loadArray(urls) {
    urls.map(u => {
      loadJS(u, (function() {
        isFinish();
      }).bind(this))
    });
  }

  function exe() {
    if (group.length === 0) {
      return;
    }
    let js = group.shift();
    if (this.isArray(js)) {
      len = js.length;
      loadArray(js);
    } else {
      len = 1;
      loadArray([js]);
    }
    return this;
  }

  return { exe, add };
})();

commandJS.add(['./1.js', './2.js', './3.js']).exe();