# Arrays

The array is the most common data structure in computer programming. Every programming language includes some form of array. Because arrays are built-in, they are usually very efficient and are considered good choices for many data storage purposes. In this chapter we explore how arrays work in JavaScript and when to use them.

## JavaScript Arrays Defined

The standard definition for an array is a linear collection of elements,where the elements can be accessed via indices, which are usually integers used to compute offsets.

A JavaScript array is actually a specialized type of JavaScript object, with the indices being property names that can be integers used to represent offsets. However, when integers are used for indices, they are converted to strings internally in order to conform to the requirements for JavaScript objects. Because JavaScript arrays are just objects, they are not quite as efficient as the arrays of other programming languages.

Arrays in JavaScript are very flexible. There are several different ways to create arrays, access array elements, and perform tasks such as searching and sorting the elements stored in an array.

### CREATING ARRAYS

* The simplest way to create an array is by declaring an array variable using the [] operator:
```
    var numbers = [];
```
When you create an array in this manner, you have an array with length of 0. You can verify this by calling the built-in length property:
```
    print(numbers.length); // displays 0
```

* Another way to create an array is to declare an array variable with a set of elements inside the [] operator:
```
    var numbers = [1,2,3,4,5];
    print(numbers.length); // displays 5
```

* You can also create an array by calling the Array constructor:
```
    var numbers = new Array();
    print(numbers.length); // displays 0
```

* You can call the Array constructor with a set of elements as arguments to the constructor:
```
    var numbers = new Array(1,2,3,4,5);
    print(numbers.length); // displays 5
```

* Finally, you can create an array by calling the Array constructor with a single argument specifying the length of the array:
```
    var numbers = new Array(10);
    print(numbers.length); // displays 10
```

Unlike many other programming languages, but common for most scripting languages, JavaScript array elements do not all have to be of the same type:
```
    var objects = [1, "Joe", true, null];
```

We can verify that an object is an array by calling the Array.isArray() function, like this:
```
    var numbers = 3;
    var arr = [7,4,1776];
    print(Array.isArray(number)); // displays false
    print(Array.isArray(arr)); // displays true
```

```
Note: We’ve covered several techniques for creating arrays. As for which function is best, most JavaScript experts recommend using the [] operator, saying it is more efficient than calling the Array constructor
```
