// instanceof: 实例 & 原型; hasOwnProperty: 属性 & exact实例
 function instanceOf(left, right) {
  let prototype = right.prototype;

  left = left.__proto__;
  while true {
    if (left === null) {
      return false;
    }
    if (prototype === left) {
      return true
    }
    left = left.__proto__;
  }
 }

