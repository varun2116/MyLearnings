# The Arrow Functions

Arrow functions – also called “fat arrow” functions. They utilize a new token, `=>`, that looks like a fat arrow. Arrow functions are anonymous and change the way this binds in functions.

Arrow functions make our code more concise, and simplify function scoping and the this keyword.

Here is an example that shows how to create an arrow function:
```
    let circleArea = (pi, r) => {
        let area = pi * r * r;
        return area;
    }

    let result = circleArea(3.14, 3);

    console.log(result);
```
Here, `circleArea` is a variable, referencing to the anonymous arrow function.
The previous code is similar to the next code in ES5:
```
    var circleArea = function(pi, r) {
      var area = pi * r * r;
      return area;
    };

    var result = circleArea(3.14, 3);

    console.log(result);
```

If an arrow function contains just one statement, then you don't have to use the `{}` brackets to wrap the code. Here is an example:
```
    let circleArea = (pi, r) => pi * r * r;
    let result = circleArea(3.14, 3);

    console.log(result);
```

> ** Note : ** When {} brackets are not used then the value of the statement in the body is automatically returned.

## The value of "this" in an arrow function

In the arrow functions, the value of `this` keyword is same as the value of `this` keyword of the **enclosing scope** (the global or function scope, inside whichever the arrow function is defined), instead of referring to the context object (that is, the object inside of which the function is a property), which is the value of this in traditional functions.

Consider this example to understand the difference in the traditional function's and the arrow function's this value:
```
    var obj = {
        f1: function() {
            console.log(this);
            var f2 = function(){
                console.log(this);
            }
            f2();
            setTimeout(f2, 1000);
        }
    }

    obj.f1();
```

The output is as follows:
```
    Object
    Window
    Window
```
Here, `this` inside the f1 function refers to **object**, as f1 is the property of it. `this` inside f2 refers to the **window** object, as f2 is a property of the window object.

But `this` behaves differently in the arrow functions. Let's replace the traditional functions with the arrow functions in the preceding code and see the value of this:
```
    let obj = {
        f1: () => {
            console.log(this);
            var f2 = () => {
                console.log(this);
            }
            f2();
            setTimeout(f2, 1000);
        }
    }

    obj.f1();
```

The output is as follows:
```
    Window
    Window
    Window
```
Here, `this` inside the f1 function copies the this value of **global scope**, as f1 lies in global scope. `this` inside f2 copies the **this value of f1**, as f2 lies in the f1 scope.
