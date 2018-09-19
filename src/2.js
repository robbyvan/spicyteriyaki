class CommandJs {
  constructor() {
    this.group = [];
    this.numsToLoad = 0;
  }

  loadScript(js, callback) {
    setTimeout(() => {
      callback();
    }, 20);
  }

  add() {
    this.group = this.group.concat(...arguments).filter(item => this._isCorrectType(item));
    return this;
  }

  exec() {
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
  }

  loadArray(arr) {
    arr.forEach(js => {
      this.loadScript(js, this.notify.bind(this))
    });
  }

  notify() {
    this.numsToLoad -= 1;
    if (this.numsToLoad === 0) {
      console.log('finish loading');
    }
  }

}