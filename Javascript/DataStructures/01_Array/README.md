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


> Note: We’ve covered several techniques for creating arrays. As for which function is best, most JavaScript experts recommend using the [] operator, saying it is more efficient than calling the Array constructor


### ACCESSING AND WRITING ARRAY ELEMENTS

* Data is assigned to array elements using the [] operator in an assignment statement. For example, the following loop assigns the values 1 through 100 to an array:
```
    var nums = [];
    for (var i = 0; i < 100; ++i) {
       nums[i] = i+1;
    }
```

* Array elements are also accessed using the [] operator. For example:
```
    var numbers = [1,2,3,4,5];
    var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] +
              numbers[4];
    print(sum); // displays 15
```

* Of course, accessing all the elements of an array sequentially is much easier using a for loop:
```
    var numbers = [1,2,3,5,8,13,21];
    var sum = 0;
    for (var i = 0; i < numbers.length; ++i) {
       sum += numbers[i];
    }
    print(sum); // displays 53
```
> Note: Notice that the for loop is controlled using the length property rather than an integer literal. Because JavaScript arrays are objects, they can grow beyond the size specified when they were created. By using the length property, which returns the number of elements currently in the array, you can guarantee that your loop processes all array elements.

### CREATING ARRAYS FROM STRINGS

Arrays can be created as the result of calling the split() function on a string. This function breaks up a string at a common delimiter, such as a space for each word, and creates an array consisting of the individual parts of the string.

The following short program demonstrates how the split() function works on a simple string:
```
    var sentence = "the quick brown fox jumped over the lazy dog";
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; ++i) {
       print("word " + i + ": " + words[i]);
    }
```
The output from this program is:
```
    word 0: the
    word 1: quick
    word 2: brown
    word 3: fox
    word 4: jumped
    word 5: over
    word 6: the
    word 7: lazy
    word 8: dog
```

> **Note**: str.split([separator[, limit]])
separator > Optional
Specifies the string which denotes the points at which each split should occur. The separator is treated as a string or as a regular expression.
limit > Optional
Integer specifying a limit on the number of splits to be found

### AGGREGATE ARRAY OPERATIONS

There are several aggregate operations you can perform on arrays. First, you can assign one array to another array:
```
    var nums = [];
    for (var i = 0; i < 10; ++i) {
       nums[i] = i+1;
    }
    var samenums = nums;
```
However, when you assign one array to another array, you are assigning a reference to the assigned array. When you make a change to the original array, that change is reflected in the other array as well. The following code fragment demonstrates how this works:
```
    var nums = [];
    for (var i = 0; i < 100; ++i) {
       nums[i] = i+1;
    }
    var samenums = nums;
    nums[0] = 400;
    print(samenums[0]); // displays 400
```
This is called a *shallow copy*. The new array simply points to the original array’s elements. A better alternative is to make a *deep copy*, so that each of the original array’s elements is actually copied to the new array’s elements. An effective way to do this is to create a function to perform the task:
```
    function copy(arr1, arr2) {
       for (var i = 0; i < arr1.length; ++i) {
          arr2[i] = arr1[i];
       }
    }
```
Now the following code fragment produces the expected result:
```
    var nums = [];
    for (var i = 0; i < 100; ++i) {
       nums[i] = i+1;
    }
    var samenums = [];
    copy(nums, samenums);
    nums[0] = 400;
    print(samenums[0]); // displays 1
```

Another aggregate operation you can perform with arrays is displaying the contents of an array using a function such as **print()**. For example:
```
    var nums = [1,2,3,4,5];
    print(nums);
```
will produce the following output:
```
    1,2,3,4,5
```
This output may not be particularly useful, but you can use it to display the contents of an array when all you need is a simple list.
