class CommandJS {
  constructor() {
    this.group = [];

    this.numsToLoad = 0;
  }

  loadScript(js, callback) {
    console.log('x Loading', js);
    setTimeout(() => {
      console.log('+ Loaded', js);
      callback();
    }, 1000);
  }

  add() {
    this.group = [...this.group, ...arguments].filter(item => this._isCorrectType(item));
    console.log(this.group);
    return this;
  }

  exe() {
    if (this.group.length === 0) {
      return;
    }

    const toLoad = this.group.shift();
    if (this._isArray(toLoad)) {
      this.numsToLoad = toLoad.length;
      this.loadArray(toLoad);
    } else {
      this.numsToLoad = 1;
      this.loadArray([toLoad]);
    }
    return this;
  }

  loadArray(toLoad) {
    toLoad.forEach(js => {
      this.loadScript(js, this.notify.bind(this));
    });
  }

  notify() {
    this.numsToLoad -= 1;
    if (this.numsToLoad === 0) {
      console.log('finished loading');
    }
  }

  _isCorrectType(item) {
    return this._isArray(item) || this._isString(item);
  }

  _isArray(item) {
    return Object.prototype.toString.call(item) === '[object Array]';
  }

  _isString(item) {
    return Object.prototype.toString.call(item) === '[object String]'; 
  }
}

let cm = new CommandJS();
cm.add(['./1.js', './2.js']).exe();