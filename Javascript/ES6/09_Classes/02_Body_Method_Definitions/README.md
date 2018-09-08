## Class body and method definitions

The body of a class is the part that is in curly brackets `{}`. This is where you define class members, such as methods or constructor.

#### Strict mode

The body of a class is executed in strict mode, i.e., code written here is subject to *stricter syntax* for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

#### Constructor

The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

A constructor can use the **super keyword** to call the constructor of the super class.

### PROTOTYPE METHODS

All the methods in the body of the class are added to the *prototype property* of the class. The prototype property is the prototype of the objects created using class.

Here is an example that shows how to add methods to the prototype property of a class:
```
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        printProfile() {
            console.log(this.name, this.age);
        }
    }

    let p = new Person("John", 12)
    p.printProfile();

    console.log("printProfile" in p.__proto__);
    console.log("printProfile" in Person.prototype);
```
The output is as follows:
```
    John 12
    true
    true
```
Here, we can see that the *printProfile method* was added to the *prototype property* of the class.

The previous code is the same as this code when written using function:
```
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.printProfile = function() {
        console.log(this.name, this.age);
    }

    var p = new Person("John", 12)
    p.printProfile();

    console.log("printProfile" in p.__proto__);
    console.log("printProfile" in Person.prototype);
```

### THE GET AND SET METHODS `GETTER/SETTER`

In ES5, to add accessor properties to the objects, we had to use the Object.defineProperty() method. ES6 introduced the **get** and **set** prefixes for methods. These methods can be added to the object literals and classes for defining the get and set attributes of the accessor properties.

When *get* and *set* methods are used in a class body, they are added to the prototype property of the class.

Here is an example to demonstrate how to define the get and set methods in a class:
```
    class Person {
        constructor(name) {
            this._name_ = name;
        }

        get name(){
            return this._name_;
        }

        set name(name){
            this._name_ = name;
        }
    }

    var pr = new Person("Jason");
    console.log(pr.name);
    pr.name = "Bourne";
    console.log(pr.name);

    console.log("name" in pr.__proto__);
    console.log("name" in Person.prototype);
    console.log(Object.getOwnPropertyDescriptor(pr.__proto__, "name").set);
    console.log(Object.getOwnPropertyDescriptor(Person.prototype, "name").get);
    console.log(Object.getOwnPropertyDescriptor(pr, "_name_").value);
```
The output is as follows:
```
    Jason
    Bourne
    true
    true
    function name(name) { this._name_ = name; }
    function name() { return this._name_; }
    Bourne
```
Here, we created an accessor property to encapsulate the `_name_` property. We also logged some other information to prove that name is an accessor property, which is added to the prototype property of the class.

### THE GENERATOR METHOD

The generator method of a class is added to the prototype property of the class.

Here is an example to demonstrate how to define a generator method in class:
```
    class GenClass {
        *generator_function(){
            yield 1;
            yield 3;
            yield 5;
        }
    }

    let obj = new GenClass();

    let generator  = obj.generator_function();

    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().done);

    console.log("generator_function" in GenClass.prototype);
```
The output is as follows:
```
    1
    3
    5
    true
    true
```

### STATIC METHODS

The **static** keyword defines a static method for a class. Static methods are called without instantiating their class and **cannot** be called through a class instance.

Static methods are the own methods of the class, that is, they are not added to the prototype property of the class, rather they are added to the class itself. For example, the String.fromCharCode() method is a static method of the String constructor, that is, fromCharCode is the own property of the String function itself.

Static methods are often used to create utility functions for an application.

Here is an example to demonstrate how to define and use a static method in class:
```
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        static distance(a, b) {
            let dx = a.x - b.x;
            let dy = a.y - b.y;

            return Math.hypot(dx, dy);
        }
    }

    const p1 = new Point(5, 5);
    const p2 = new Point(10, 10);

    console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

The previous code is the same as this code when written using function:
```
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }

    Point.distance = function(a, b) {
        var dx = a.x - b.x;
        var dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }

    var p1 = new Point(5, 5);
    var p2 = new Point(10, 10);

    console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### BOXING WITH PROTOTYPE AND STATIC METHODS

When a static or prototype method is called without a value for `this`, the this value will be **undefined** inside the method. This behavior will be the same even if the "use strict" directive isn't present, because code within the class body's syntactic boundary is always executed in strict mode.
```
    class Animal {
        speak() {
            return this;
        }
        static eat() {
            return this;
        }
    }

    let obj = new Animal();
    obj.speak(); // Animal {}
    let speak = obj.speak;
    speak(); // undefined

    Animal.eat(); //class Animal {
    let eat = Animal.eat;
    eat(); // undefined
```
If the above is written using traditional function-based syntax, then autoboxing in method calls will happen in non–strict mode based on the initial *this* value. If the initial value is *undefined*, *this* will be set to the global object.

Autoboxing will not happen in strict mode, the *this* value remains as passed.
```
    function Animal() { }

    Animal.prototype.speak = function(){
        return this;
    }

    Animal.eat = function() {
        return this;
    }

    let obj = new Animal();
    obj.speak(); // Animal {}
    let speak = obj.speak;
    speak(); // global object

    Animal.eat(); //f Animal() { }
    let eat = Animal.eat;
    eat(); // global object
```

### INSTANCE PROPERTIES

**Instance properties** must be defined inside of class methods:
```
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
```
**Static class-side properties** and **prototype data properties** must be defined outside of the ClassBody declaration:
```
    Rectangle.staticWidth = 20;
    Rectangle.prototype.prototypeWidth = 25;
```

### THE COMPUTED METHOD NAMES

You can also decide the name of the static and non-static methods of a class and concise methods of a object literal on runtime, that is, you can define the name of methods via expressions. Here is an example to demonstrate this:
```
    class ClassName {
        static ["my"+"Method"]() {
            console.log("Hello");
        }
    }

    ClassName["my"+"Method"](); //output Hello
```

The computed property names also allow you to use *symbols* as keys for the methods. Here is an example to demonstrate this:
```
    let sym = Symbol();
    class ClassName {
        static [sym]() {
            console.log("Hello");
        }
    }

    ClassName[sym](); // output Hello
```
