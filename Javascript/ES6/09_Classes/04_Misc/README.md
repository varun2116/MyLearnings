## Species

You might want to return **Array** objects in your derived array class MyArray. The species pattern lets you override default constructors.

For example, when using methods such as map() that returns the default constructor, you want these methods to return a parent Array object, instead of the MyArray object. The Symbol.species symbol lets you do this:
```
    class MyArray extends Array {
        //overwrite species to the parent Array Constructor
        static get [Symbol.species]() {
            return Array;
        }
    }

    let a = new Array(1, 2, 3);
    let mapped = a.map(x => x * x);

    console.log(mapped instanceof MyArray); // output false
    console.log(mapped instanceof Array); // output true
```

## Mix-ins

Abstract subclasses or mix-ins are templates for classes. An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass.

A function with a superclass as input and a subclass extending that superclass as output can be used to implement mix-ins in ECMAScript:
```
    let calculatorMixin = Base => class extends Base {
      calc() { }
    };

    let randomizerMixin = Base => class extends Base {
      randomize() { }
    };
```

A class that uses these mix-ins can then be written like this:
```
    class Foo { }
    class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
```

## new.target

ES6 adds a parameter named new.target to all the functions. The dot in between is a part of the parameter name.

The default value of new.target is undefined. But when a function is invoked as a constructor, the value of the new.target parameter depends on the following conditions:
* If a constructor is invoked using a new operator, then new.target points to this constructor
* If a constructor is invoked via super keyword, then the value of new.target in it is the same as the value of new.target of the constructor that is called super.

Inside an arrow function, the value of new.target is the same as the value of new.target of the surrounding non-arrow function.

Here is an example code to demonstrate this:
```
    function myConstructor()
    {
      console.log(new.target.name);
    }

    class myClass extends myConstructor
    {
      constructor()
      {
        super();
      }
    }

    var obj1 = new myClass();
    var obj2 = new myConstructor();
```
The output is as follows:
```
    myClass
    myConstructor
```
