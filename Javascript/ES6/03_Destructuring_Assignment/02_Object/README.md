## The Object Destructuring Assignment

An object destructuring assignment is used to the extract property values of an object and assign them to the variables.

Before ES6, the programmers used to do it in the following way to assign the values of an object's properties to the variables:
```
    var obj = {"name": "John", "age": "30"};

    var name = obj.name;
    var age = obj.age;
```

In ES6, we can do this in just one line statement, using the object destructuring assignment:
```
    let obj = {"name": "John", "age": "30"};

    let {name, age} = obj;
```
On the left-hand side of the object destructuring statement, we need to place the variables to which we want to assign the object property values using syntax similar to object literal. On right-hand side, we need to place an object whose property values we want to extract.

In this example, the declared names name and age matched the object property names. We can also assign properties to variables with any name,
```
    let obj = {"name": "John", "age": "30", "status":"unknown"};

    let {name:EmpName, age:EmpAge, status:EmpStatus} = obj;
    console.log(EmpName, EmpAge); // output John 30
```

### THINGS TO REMEMBER

There are a number of other caveats. First, you can’t start a statement with a curly brace, because it looks like a code block,
```
    // THIS FAILS
    { a, b, c } = myObject;
```
You must either declare the variables,
```
    // THIS WORKS
    const { a, b, c } = myObject;
```
or use parentheses if variables are already declared,
```
    // THIS WORKS
    ({ a, b, c } = myObject);
```
You should also be wary of mixing declared and undeclared variables,
```
    // THIS FAILS
    let a;
    let { a, b, c } = myObject;

    // THIS WORKS
    let a, b, c;
    ({ a, b, c } = myObject);
```

### DEFAULT VALUES FOR THE VARIABLES

You can also provide the default values to the variables, if the object property is undefined while destructuring. Here is an example to demonstrate this:
```
    let {a, b, c=3} = {a:"1", b:"2"};
    console.log(c); //Output 3
```

### DESTRUCTURING COMPUTED PROPERTY NAMES

Some property names are constructed dynamically using expressions. In this case, to extract the property values, we can use the [ ] token to provide the property name an expression. Here is an example:
```
    let {["first"+"Name"]: x} = { firstName: "Eden" };
    console.log(x); //output Eden
```

### DESTRUCTURING NESTED OBJECTS

We can also the extract property values from the nested objects, that is, the objects within the objects. Here is an example to demonstrate this:
```
    var {name, otherInfo: {age}} = {name: "Eden", otherInfo: {age: 23}};
    console.log(name, age); // output Eden 23
```

### USING THE OBJECT DESTRUCTURING ASSIGNMENT AS A PARAMETER

Just like the array destructuring assignment, we can also use the object destructuring assignment as a function parameter. Here is an example to demonstrate this:
```
    function functionName({name = 'Eden', age = 23, prof = "Desk"} = {}) {
        console.log(name, age, prof); // output John 30 Desk
    }

    functionName({name: "John", age: "30"});
```
Here, we passed an empty object as a default parameter value, which will be used as a default object if undefined is passed as a function argument.
