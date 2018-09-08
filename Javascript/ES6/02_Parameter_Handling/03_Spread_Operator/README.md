## The Spread operator

A spread operator is represented by the `…` token. A spread operator splits an iterable object into the individual values.

> **Note:** An iterable is an object that contains a group of values, and implements ES6 iterable protocol to let us iterate through its values. An array is an example of built in an iterable object.

A spread operator can be placed wherever multiple function arguments or multiple elements (for array literals) are expected in code.

The spread operator is commonly used to spread the values of an iterable object into the arguments of a function. Let's take an example of an array and see how to split it into the arguments of a function.

Before ES6, for providing the values of an array as function argument, the programmers used the **apply()** method of functions. Here is an example:
```
    function myFunction(a, b) {
      return a + b;
    }

    var data = [1, 4];
    var result = myFunction.apply(null, data);

    console.log(result); //Output "5"
```
Here, the apply method takes an array, extracts the values, passes them as individual arguments to the function, and then calls it.

ES6 provides an easy way to do this, using the spread operator. Here is an example:
```
    function myFunction(a, b) {
     return a + b;
    }

    let data = [1, 4];
    let result = myFunction(...data);
    console.log(result); //Output "5"
```
During runtime, before the JavaScript interpreter calls the myFunction function, it replaces …data with the 1,4 expression:
```
    let result = myFunction(...data);
```
The previous code is replaced with:
```
    let result = myFunction(1,4);
```
After this, the function is called.

>**Note :** A spread operator doesn't call the **apply()** method. The JavaScript runtime engine spreads the array using the iteration protocols, and has nothing to do with the apply() method, but the behavior is same.

### Other usages of the spread operator

The spread operator is not just limited to spreading an iterable object into the function arguments, but it can be used wherever multiple elements (for array literals) are expected in code. So it has many uses. Let's see some other use cases of the spread operator for arrays.

#### MAKING ARRAY VALUES A PART OF ANOTHER ARRAY

It can also be used to make the array values a part of another array. Here is an example code that demonstrates how to make the values of an existing array a part of another array while creating it.
```
    let array1 = [2,3,4];
    let array2 = [1, ...array1, 5, 6, 7];

    console.log(array2); //Output "1, 2, 3, 4, 5, 6, 7"
```
Here the following line:
```
    let array2 = [1, ...array1, 5, 6, 7];
```
Will be replaced with the following line:
```
    let array2 = [1, 2, 3, 4, 5, 6, 7];
```

#### PUSHING THE VALUES OF AN ARRAY INTO ANOTHER ARRAY

Sometimes, we may need to push the values of an existing array into the end of another existing array.

Before ES6, this is how the programmers used to do it:
```
    var array1 = [2,3,4];
    var array2 = [1];

    Array.prototype.push.apply(array2, array1);

    console.log(array2); //Output "1, 2, 3, 4"
```

But in ES6 we have a much cleaner way to do it, which is as follows:
```
    let array1 = [2,3,4];
    let array2 = [1];

    array2.push(...array1);

    console.log(array2); //Output "1, 2, 3, 4"
```
Here the push method takes a series of variables, and adds them to the end of the array on which it is called.

Here the following line:
```
    array2.push(...array1);
```
Will be replaced with the following line:
```
    array2.push(2, 3, 4);
```

#### Spreading multiple arrays

Multiple arrays can be spread on a single line of expression. For example, take the following code:
```
    let array1 = [1];
    let array2 = [2];
    let array3 = [...array1, ...array2, ...[3, 4]];//multi array spread
    let array4 = [5];

    function myFunction(a, b, c, d, e)
    {
      return a+b+c+d+e;
    }

    let result = myFunction(...array3, ...array4); //multi array spread

    console.log(result); //Output "15"
```
