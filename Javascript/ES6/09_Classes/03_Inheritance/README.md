## Inheritance

### Sub classing with `extends`

The **extends** keyword is used in class declarations or class expressions to create a class as a child of another class.

```
    class Animal {
        constructor(name) {
            this.name = name;
        }

        speak() {
            console.log(`${this.name} makes a noise`);
        }
    }

    class Dog extends Animal {
        constructor(name) {
            super(name); // call the super class constructor and pass in the name parameter
        }
        speak() {
            console.log(this.name + ' barks.');
        }
    }

    let d = new Dog("Mitzie");
    d.speak(); //output Mitzie barks
```
> ** Note : ** If there is a constructor present in the subclass, it needs to first call **super()** before using "this".

One may also **extend** traditional function-based "classes":
```
    function Animal(name) {
        this.name = name;
    }

    Animal.prototype.speak = function() {
        console.log(this.name + " makes a noise");
    }

    class Dog extends Animal {
        speak() {
            console.log(this.name + " barks");
        }
    }

    let d = new Dog("Mitzie");
    d.speak(); // output Mitzie barks.
```

Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use `Object.setPrototypeOf()`:
```
    const Animal = {
        speak() {
            console.log(this.name + " makes noise");
        }
    };

    class Dog {
      constructor(name) {
          this.name = name;
      }
    }

    // If you do not do this you will get a TypeError when you invoke speak
    Object.setPrototypeOf(Dog.prototype, Animal);

    let d = new Dog('Mitzie');
    d.speak(); // output Mitzie makes a noise.
```
> **Note :** The **Object.setPrototypeOf()** method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

> **Syntax :** Object.setPrototypeOf(obj, prototype). **obj :** The object which is to have its prototype set. **prototype :** The object's new prototype (an object or null). **Return value :** The specified object.

As a class can inherit a function constructor, we can also inherit the prebuilt function constructors, such as String and Array, and also the custom function constructors using the classes instead of other hacky ways that we used to use.

> ** Note : ** If a child class doesn't have a constructor method, then the default behavior will invoke the constructor method of the parent class.

### Super class calls with `super`

The **super** keyword is used in two ways:
* It's used in a class constructor method to call the parent constructor
* When used inside methods of a class, it references the static and non-static methods of the super class.

The first use of the super keyword, we used in the above section in the child constructor. Now we will see the second use of super keyword.

The **super** keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance.
```
    class Cat {
      constructor(name) {
          this.name = name;
      }

      speak() {
          console.log(`${this.name} makes a noise`);
      }
      static eat(name) {
          console.log(`${name} eats rat`);
      }
    }

    class Lion extends Cat {
        speak() {
            super.speak();
            console.log(`${this.name} roars`);
        }
        static eat(name) {
            super.eat(name);
            console.log(`${name} eats deer`);
        }
    }

    let l = new Lion("Simba");
    l.speak();
    Lion.eat("Simba");
    //Simba makes a noise
    //Simba roars
    //Simba eats rat
    //Simba eats deer
```
