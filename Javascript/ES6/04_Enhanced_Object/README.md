# Enhanced Object Literals

ES6 has added some new syntax-based extensions to the {} object literal for creating properties.

## Defining properties

ES6 provides a shorter syntax for assigning the object properties to the values of the variables, which have the same name as the properties.

In ES5:
```
    var x = 1, y = 2;

    var obj = {
      x: x,
      y: y
    }

    console.log(obj.x);
```

In ES6:
```
    let x = 1, y = 2;

    let obj = {x, y};

    console.log(obj.x);
```

## Defining methods

ES6 provides a new syntax for defining the methods on an object.

In ES5:
```
    var obj = {
      sum: function sum(a, b) {
        return a + b;
      }
    }

    console.log(obj.sum(1,2)); //output 3
```

Here is an example to demonstrate the new syntax:
```
    let obj = {
      sum(a,b){
        return a + b;
      }
    }

    console.log(obj.sum(1,2)); //output 3
```

## The computed property names

The property names that are evaluated during runtime are called as the *computed property names*. An expression is usually resolved to find the property name dynamically.

In ES5, the computed properties are defined in this way:
```
    var obj = {};

    obj["first"+"Name"] = "Eden"; // "firstName" is the property name

    console.log(obj["first"+"Name"]);// output Eden
```
Here, after creating the object, we attach the properties to the object. But in ES6, we can add the properties with the computed name while creating the objects. Here is an example:
```
    let obj = {
      ["first"+"Name"] : "Eden"
    };

    console.log(obj["first"+"Name"]);
```
