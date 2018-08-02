class Person {
  constructor(name) {
    this.name = name;
    // this.sayName = this.sayName.bind(this);
  }

  sayName() {
    console.log(this.name);
  }
}

let p = new Person('p');
let q = new Person('q');
console.log(p);
console.log(p.sayName);
console.log(p.__proto__.sayName === p.sayName);
console.log(p.sayName === q.sayName);
