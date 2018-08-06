function Person(gender) {
  this.gender = gender;
}

Person.prototype.sayGender = function() {
  console.log(this);
  return this.gender;
}

let p = new Person('female');
console.log(p);
console.log(p.sayGender());

function Chinese(gender, region) {
  Person.call(this, gender);
  this.region = region;
}

Chinese.prototype = Object.create(Person.prototype); // 只继承方法
// Chinese.prototype = new Person(); // 多余的属性

Chinese.prototype.sayRegion = function () {
  return this.region;
}


let cn = new Chinese('male', 'sc');
console.log(cn)
console.log(cn.sayGender());
console.log(cn.sayRegion());