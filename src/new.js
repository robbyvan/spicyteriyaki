// new: 新对象 -> 获得构造函数 -> 绑定原型 -> 执行构造函数 -> 返回一个对象
export default function myNew() {
  let obj = new Object();

  let Con = [].shift.call(arguments);

  obj.__proto__ = Con.prototype;

  let result = Con.apply(obj, arguments);

  return typeof result === 'object' ? result : obj;
}