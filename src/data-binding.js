// 添加reactive到属性上
function observe(obj) {
  // 判断类型
  if (!obj || typeof obj !== 'object') {
    return;
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key]);
  });
}

// 监听get & set
function defineReactive(obj, key, val) {
  // 递归子属性
  observe(val);

  let dp = new Dep();

  // 数据属性: configurable, enumerable, writable, value
  // 访问器属性: configurable, enumerable, get, set
  Object.defineProperty(obj, key, {
    enumerable: true, // 可枚举, 如for in
    configurable: true, // 可配置, 能否delete删除属性等
    get: function reactiveGetter() {
      console.log('Get Value');
      // 将watcher添加到订阅
      if (Dep.target) {
        dp.addSub(Dep.target);
      }
      return val;
    },
    set: function reactiveSetter(newVal) {
      console.log('Change Value');
      val = newVal;
      // 执行watcher的update
      dp.notify();
    }
  });
}




// 依赖
class Dep {
  constructor() {
    this.subs = [];
  }

  // 添加到订阅
  addSub(sub) {
    this.subs.push(sub);
  }

  // 通知(执行watcher的update)
  notify() {
    this.subs.forEach(sub => {
      sub.update();
    })
  }
}

Dep.target = null;

class Watcher {
  constructor(obj, key, cb) {
    Dep.target = this;
    this.cb = cb;
    this.obj = obj;
    this.key = key;
    this.value = obj[key];
    Dep.target = null;
  }

  update() {
    this.value = this.obj[this.key];
    this.cb(this.value);
  }
}


// test
const frag = document.createDocumentFragment();
const div = document.createElement('div');
frag.appendChild(div);
document.body.appendChild(frag);

function updateDiv(value) {
  document.querySelector('div').innerText = value;
}

let data = { name: 'robby' };
observe(data);
new Watcher(data, 'name', updateDiv);
data.name = 'van';

setTimeout(function() {
  data.name = 'robby';
}, 2000);
