# 变量类型
## 原始类型(存在栈中,值传递)
- `Boolean`
- `String`
- `Number`
- `Null`
- `Undefined`
- `Symbol(ES6)`
## 引用类型(存在堆中,址传递)
- `Object`
- `Function`
- ...
## `typeof`
- `typeof null`结果是`object`，这是`typeof`的一个bug，`null`是原始值，非引用类型
- 引用类型除了`function`其他的全部是`object`
- `typeof Symbol()`得到的是`symbol(ES6)`
## `instanceof`
- 用于实例和构造函数的对应
# 原型和原型链
- 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（`null`除外）
- 所有的引用类型（数组、对象、函数），都有一个`__proto__`属性，属性值是一个普通的对象
- 所有的函数，都有一个`prototype`属性，属性值也是一个普通的对象
- 所有的引用类型（数组、对象、函数），`__proto__`属性值指向它的构造函数的`prototype`属性值
## 原型
``` //构造函数
    function Foo(name, age) {
      this.name = name
    }
    Foo.prototype.alertName = function () {
      alert(this.name)
    }
    var f = new Foo('cjb')
    f.printName = function () {
      console.log(this.name)
    }
    f.printName()
    f.alertName()
```
- `f`对象本身没有`alertName`这个属性，会去它的`_proto_`（它的构造函数的`prototype`）中寻找
- 判断是否对象本身的属性：`hasOwnProperty`
## 原型链
