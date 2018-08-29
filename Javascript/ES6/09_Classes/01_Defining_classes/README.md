## Defining classes

Classes are in fact **special functions**, and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

### THE CLASS DECLARATION

One way to define a class is using a class declaration. To declare a class, you use the **class** keyword with the name of the class.

```
    class Student {
        constructor(name) {
            this.name = name;
        }
    }

    var obj = new Student("John")
    console.log(obj.name); //output John
```
Here, we created a class named *Student*. Then, we defined a constructor method in it. Finally, we created a new instance of the class—an object, and logged the name property of the object.

The body of a class is in the curly brackets, that is, `{}`. This is where we need to define methods. Methods are defined **without the function keyword**, and a comma is not used in between the methods.

Classes are treated as functions, and internally the class name is treated as the function name, and the body of the *constructor* method is treated as the body of the function.

There can only be **one constructor method** in a class. Defining more than one constructor will throw the SyntaxError exception.

All the code inside a class body is executed in the *strict mode*, by default.

The previous code is the same as this code when written using function:
```
    function Student(name) {
        this.name = name;
    }

    var obj = new Student("John");
    console.log(obj.name); //output John
```

To prove that a class is a function, consider this code:
```
    class Student {
      constructor(name) {
          this.name = name;
      }
    }

    function School(name) {
        this.name = name;
    }

    console.log(typeof Student);
    console.log(typeof School === typeof Student);
```

The output is as follows:
```
    function
    true
```
Here, we can see that a class is a function. It's just a new syntax for creating a function.

#### HOISTING `Classes are not hoisted`

An important difference between function declarations and class declarations is that function declarations are hoisted and **class declarations are not**. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError
```
    var f = new functionName();
    function functionName() {}

    const p = new Rectangle(); // ReferenceError
    class Rectangle {}
```

### THE CLASS EXPRESSION

A class expression is another way to define a class. Class expressions can be *named* or *unnamed*. The name given to a named class expression is local to the class's body.(it can be retrieved through the class's (not an instance's) .name property, though)
```
    //unnamed
    let Rectangle = class {
        constructor(height,width) {
            this.height = height;
            this.width = width;
        }
    };

    console.log(Rectangle.name); //output Rectangle

    //named
    let Rectangle = class Rectangle2 {
        constructor(height,width) {
            this.height = height;
            this.width = width;
        }
    };

    console.log(Rectangle.name); // output Rectangle2
```
> ** Note : ** Class expressions are subject to the **same hoisting restrictions** as described in the Class declarations section.

The previous code is the same as this code when written using function:
```
    //unnamed
    var Rectangle = function(name) {
        this.height = height;
        this.width = width;
    }

    console.log(Rectangle.name); //output Rectangle

    //named
    var Rectangle = function Rectangle2(height,width) {
        this.height = height;
        this.width = width;
    }

    console.log(Rectangle.name); // output Rectangle2
```

### OVERRIDING THE RESULT OF THE CONSTRUCTOR METHOD

The **constructor method**, by default, returns the new instance if there is no return statement in it. If there is a **return statement**, then whatever is the value in the return statement is returned.

Here is an example to demonstrate this:
```
    class ClassName {
        constructor() {
            return Object.create(null);
        }
    }

    console.log(new ClassName() instanceof ClassName); // output false
```
