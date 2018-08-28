## The Array Destructuring Assignment

An array destructuring assignment is used to extract the values of an iterable object and assign them to the variables. It's named as the array destructuring assignment because the expression is similar to an array construction literal.

Before ES6, the programmers used to do it this way to assign the values of an array to the variables:
```
      var myArray = [1,2,3];

      var a = myArray[0];
      var b = myArray[1];
      var c = myArray[2];
```
Here, we are extracting the values of an array and assigning them to the a, b, c variables respectively.

In ES6, we can do this in just one line statement using the array destructuring assignment:
```
    let myArray = [1,2,3];
    let a, b, c;

    [a,b,c] = myArray; //array destructuring assignment syntax
```
As you see, the [a, b, c] is the array destructuring expression.

On the left-hand side of the array destructuring statement, we need to place the variables to which we want to assign the array values, using syntax similar to an array literal. On right-hand side, we need to place an array (actually any iterable object) whose values we want to extract.

The previous example code can be made even shorter in this way:
```
    let [a, b, c] = [1, 2, 3];
```
Here we create the variables on the same statement and instead of providing the array variable, we provide the array with a construction literal.

If there are fewer variables than items in the array, then only the first items are considered.

>**Note :** If you place a non-iterable object on the right-hand side of the array destructuring assignment syntax, then a **TypeError exception** is thrown.

### IGNORING VALUES

We can also ignore some of the values of the iterable. Here is example code, which shows how to do this:
```
    let [a,,b] = [1,2,3];

    console.log(a);
    console.log(b);
```

The output is as follows:
```
    1
    3
```

### USING THE REST OPERATOR

We can prefix the last variable of the array destructuring expression using the `…` token. In this case, the variable is always converted into an array object, which holds the rest of the values of the iterable object, if the number of other variables is less than the values in the iterable object.

Consider this example to understand it:
```
    let [a, ...b] = [1, 2, 3, 4, 5, 6];

    console.log(a);
    console.log(Array.isArray(b));
    console.log(b);
```

The output is as follows:
```
    1
    true
    2,3,4,5,6
```
In the previous example code, you can see that the b variable is converted into an array, and it holds all the other values of the right-hand side array.

Here the `…` token is called as the rest operator.

We can also ignore the values while using the rest operator. Here is an example to demonstrate this:
```
    let [a,,, ...b] = [1, 2, 3, 4, 5, 6];

    console.log(a);
    console.log(b);
```

The output is as follows:
```
    1
    4,5,6
```
Here, we ignored the 2, 3 values.

### DEFAULT VALUES FOR VARIABLES

While destructuring, you can also provide the default values to the variables if an array index is undefined. Here is an example to demonstrate this:
```
    let [a, b, c = 3] = [1, 2];
    console.log(c); //Output "3"
```

### NESTED ARRAY DESTRUCTURING

We can also extract the values from a multi-dimensional array and assign them to variables. Here is an example to demonstrate this:
```
    let [a, b, [c, d]] = [1, 2, [3, 4]];
```

### USING THE DESTRUCTURING ASSIGNMENT AS A PARAMETER

We can also use the array destructuring expression as the function parameter for extracting the values of an iterable object, passed as argument into the function parameters. Here is an example to demonstrate this:
```
    function functionName([a, b, c=3]) {
        console.log(a, b, c); //output 1 2 3
    }

    functionName([1,2]);
```

If we pass undefined as an argument to a function call, then JavaScript checks for the **default parameter** value. So, we can provide a default array here too, which will be used if the argument is undefined. Here is an example to demonstrate this:
```
    function functionName2([a, b, c = 3] = [1, 2, 4]) {
        console.log(a,b,c); // output 1 2 4
    }

    functionName2(undefined);
```
Here, we passed undefined as an argument and therefore, the default array, which is [1, 2, 4], was used for extracting the values.
