## The `const` keyword

The ES6 `const` keyword is used to declare the read-only variables, that is, the variables whose value cannot be reassigned. Before ES6, the programmers usually used to prefix the variables that were supposed to be constant. For example, take a look at the following code:
```
    var const_pi = 3.141;
    var r = 2;
    console.log(const_pi * r * r); //Output "12.564"
```
The value of **pi** should always remain constant. Here, although we have prefixed it, there is still a chance that we might accidentally change its value somewhere in the program, as they're no native protection to the value of pi. Prefixing is just not enough to keep the track of the constant variables.

Therefore, the `const` keyword was introduced to provide a native protection to the constant variables. So, the previous program should be written in this way in ES6:
```
    const pi = 3.141;
    var r = 2;

    console.log(pi * r * r); //Output "12.564"

    pi = 12; //throws read-only exception
```
Here, when we tried to change the value of **pi**, a read-only exception was thrown.

### The scope of constant variables

Constant variables are **block-scoped variables**, that is, they follow the same scoping rules as the variables that are declared using the let keyword. Here is an example, which shows the scope of the constant variables:
```
    const a = 12; //accessible globally

    function myFunction()
    {
      console.log(a);

      const b = 13; //accessible throughout function

      if(true)
      {
        const c = 14; //accessible throughout the "if" statement
        console.log(b);
      }

      console.log(c);
    }

    myFunction();
```
The output of the preceding code is:
```
12
13
ReferenceError Exception
```
Here, we can see that the constant variables behave in the same way as the block scoped variables, when it comes to the scoping rules.

### Referencing the objects using constant variables

When we assign an object to a variable, the reference of the object is what the variable holds and not the object itself. So, when assigning an object to a constant variable, the reference of the object becomes constant to that variable and not to the object itself. Therefore, the object is mutable.

Consider this example:
```
    const a = {
      "name" : "John"
    };

    console.log(a.name);

    a.name = "Eden";

    console.log(a.name);

    a = {}; //throws read-only exception
```
The output of the preceding code is:
```
    John
    Eden
    a is read only: Exception
```
In this example, the **a** variable stores the address (that is, reference) of the object. So the address of the object is the value of the a variable, and it cannot be changed. But the object is mutable. So when we tried to assign another object to the a variable, we got an exception as we were trying to change the value of the a variable.
