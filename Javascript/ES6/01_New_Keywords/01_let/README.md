## The `let` keyword

The ES6 `let` keyword is used to declare a **block scoped variable**, optionally initializing it to a value. Due to the fact that JavaScript variables are not block scoped, there are chances of memory leak and also the JavaScript programs are harder to read and debug.

### Declaring function scoped variables

The JavaScript variables that are declared using the `var` keyword are called as **function scoped variables**. The function scoped variables are accessible **globally** to the script, that is, throughout the script, if declared outside a function. Similarly, if the function scoped variables are declared inside a function, then they become accessible throughout the **function**, but not outside the function.

Here is an example that shows how to create the function-scoped variables:
```
    var a = 12; //accessible globally

    function myFunction()
    {
      console.log(a);

      var b = 13; //accessible throughout function

      if(true)
      {
        var c = 14; //accessible throughout function
        console.log(b);
      }

      console.log(c);
    }

    myFunction();
```
The output of the code is:
```
    12
    13
    14
```

Here, you can see that the `c` variable is accessible outside the if statement. Therefore, ES6 had introduced the let keyword, which can be used for creating variables that are block scoped.

### Declaring block scoped variables

Variables that are declared using the `let` keyword are called as **block scoped variables**. The block scoped variables behave the same way as the function scoped variables when declared outside a function, that is, they are accessible globally. But when the block scoped variables are declared inside a block, then they are accessible inside the block that they are defined in (and also any sub-blocks) but not outside the block.

> **Note:** A block is used to group zero or more statements. A pair of curly brackets delimits the block, that is {}.

Let's take the previous example script, replace `var` with the `let` keyword, and see the output:
```
    let a = 12; //accessible globally

    function myFunction()
    {
      console.log(a);

      let b = 13; //accessible throughout function

      if(true)
      {
        let c = 14; //accessible throughout the "if" statement
        console.log(b);
      }

      console.log(c);
    }

    myFunction();
```
The output of the code is:
```
    12
    13
    Reference Error Exception
```

### Re-declaring variables

When you declare a variable using the `var` keyword that is already declared using var keyword (in the same scope) then it's **overwritten**. Consider this example:
```
    var a = 0;
    var a = 1;

    console.log(a);

    function myFunction()
    {
      var b = 2;
      var b = 3;

      console.log(b);
    }

    myFunction();
```
The output of the code is:
```
1
3
```
The output is as expected. But the variables created using the `let` keyword don't behave in the same way.

When you declare a variable using the `let` keyword that is already declared using the let keyword in the same scope, then it throws a **TypeError exception**. Consider this example:
```
    let a = 0;
    let a = 1; //TypeError

    function myFunction()
    {
      let b = 2;
      let b = 3; //TypeError

      if(true)
      {
        let c = 4;
        let c = 5; //TypeError
      }
    }

    myFunction();
```

When you declare a variable with a name that's already accessible in a function (or inner function), or is a sub-block using `var` or the `let` keyword respectively, then it's a different variable. Here, is an example that shows the behavior:
```
    var a = 1;
    let b = 2;

    function myFunction()
    {
      var a = 3; //different variable
      let b = 4; //different variable

      if(true)
      {
        var a = 5; //overwritten
        let b = 6; //different variable

        console.log(a);
        console.log(b);
      }

      console.log(a);
      console.log(b);
    }

    myFunction();

    console.log(a);
    console.log(b);
```
The output of the code is:
```
    5
    6
    5
    4
    1
    2
```

> When writing the ES6 code, it is recommended to switch to using the `let` keyword because it makes scripts more memory friendly, prevents scoping mistakes, prevents accidental bugs, and makes the code easier to read. But if you are already addicted to the var keyword and comfortable using it, then you can still use this.
