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


> **Note:** We’ve covered several techniques for creating arrays. As for which function is best, most JavaScript experts recommend using the [] operator, saying it is more efficient than calling the Array constructor


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
> **Note:** Notice that the for loop is controlled using the length property rather than an integer literal. Because JavaScript arrays are objects, they can grow beyond the size specified when they were created. By using the length property, which returns the number of elements currently in the array, you can guarantee that your loop processes all array elements.

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

> **Note:** str.split([separator[, limit]])
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

## Accessor Functions

JavaScript provides a set of functions you can use to access the elements of an array. These functions, called *accessor functions*, return some representation of the target array as their return values.

#### SEARCHING FOR A VALUE

One of the most commonly used accessor functions is indexOf(), which looks to see if the argument passed to the function is found in the array. If the argument is contained in the array, the function returns the index position of the argument. If the argument is not found in the array, the function returns -1. Here is an example:
```
    var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
    putstr("Enter a name to search for: ");
    var name = readline();
    var position = names.indexOf(name);
    if (position >= 0) {
       print("Found " + name + " at position " + position);
    }
    else {
       print(name + " not found in array.");
    }
```
If you run this program and enter Cynthia, the program will output:
```
    Found Cynthia at position 1
```
If you enter Joe, the output is:
```
    Joe not found in array.
```

If you have multiple occurrences of the same data in an array, the indexOf() function will always return the position of the first occurrence. A similar function, lastIndexOf(), will return the position of the last occurrence of the argument in the array, or -1 if the argument isn’t found. Here is an example:
```
    var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike",
                 "Jennifer"];
    var name = "Mike";
    var firstPos = names.indexOf(name);
    print("First found " + name + " at position " + firstPos);
    var lastPos = names.lastIndexOf(name);
    print("Last found " + name + " at position " + lastPos);
```
The output from this program is:
```
    First found Mike at position 1
    Last found Mike at position 5
```

#### STRING REPRESENTATIONS OF ARRAYS

There are two functions that return string representations of an array: **join()** and **toString()**. Both functions return a string containing the elements of the array delimited by commas. Here are some examples:
```
    var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
    var namestr = names.join();
    print(namestr);  // David,Cynthia,Raymond,Clayton,Mike,Jennifer
    namestr = names.toString();
    print(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
```
When you call the print() function with an array name, it automatically calls the toString() function for that array:
```
    print(names); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
```

#### CREATING NEW ARRAYS FROM EXISTING ARRAYS

There are two accessor functions that allow you create new arrays from existing arrays: **concat()** and **splice()**. The concat() function allows you to put together two or more arrays to create a new array, and the splice() function allows you to create a new array from a subset of an existing array.

* Let’s look first at how concat() works. The function is called from an existing array, and its argument is another existing array. The argument is concatenated to the end of the array calling concat(). The following program demonstrates how concat() works:
```
    var cis = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
    var dmp = ["Raymond", "Cynthia", "Bryan"];
    var itDiv = cis.concat(dmp);
    print(itDiv);
    itDiv = dmp.concat(cis);
    print(itDiv);
```
The program outputs:
```
    Mike,Clayton,Terrill,Danny,Jennifer,Raymond,Cynthia,Bryan
    Raymond,Cynthia,Bryan,Mike,Clayton,Terrill,Danny,Jennifer
```
The first output line shows the data from the cis array first, and the second output line shows the data from the dmp array first.

* The splice() function creates a new array from the contents of an existing array. The arguments to the function are the starting position for taking the splice and the number of elements to take from the existing array. Here is how the method works:
```
    var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
    var dmpDept = itDiv.splice(3,3);
    var cisDept = itDiv;
    print(dmpDept); // Raymond,Cynthia,Danny
    print(cisDept); // Mike,Clayton,Terrill,Jennifer
```
There are other uses for splice() as well, such as modifying an array by adding and/or removing elements.

## Mutator Functions

JavaScript has a set of *mutator functions* that allow you to modify the contents of an array without referencing the individual elements. These functions often make hard techniques easy, as you’ll see below.

#### ADDING ELEMENTS TO AN ARRAY

There are two mutator functions for adding elements to an array: **push()** and **unshift()**.

* The push() function adds an element to the end of an array:
```
    var nums = [1,2,3,4,5];
    print(nums); // 1,2,3,4,5
    nums.push(6);
    print(nums); // 1,2,3,4,5,6
```
Using push() is more intuitive than using the length property to extend an array:
```
    var nums = [1,2,3,4,5];
    print(nums); // 1,2,3,4,5
    nums[nums.length] = 6;
    print(nums); // 1,2,3,4,5,6
```
Adding data to the beginning of an array is much harder than adding data to the end of an array. To do so without the benefit of a mutator function, each existing element of the array has to be shifted up one position before the new data is added. Here is some code to illustrate this scenario:
```
    var nums = [2,3,4,5];
    var newnum = 1;
    var N = nums.length;
    for (var i = N; i >= 0; --i) {
       nums[i] = nums[i-1];
    }
    nums[0] = newnum;
    print(nums); // 1,2,3,4,5
```
This code becomes more inefficient as the number of elements stored in the array increases.

* The mutator function for adding array elements to the beginning of an array is unshift(). Here is how the function works:
```
    var nums = [2,3,4,5];
    print(nums); // 2,3,4,5
    var newnum = 1;
    nums.unshift(newnum);
    print(nums); // 1,2,3,4,5
    nums = [3,4,5];
    nums.unshift(newnum,1,2);
    print(nums); // 1,2,3,4,5
```
The second call to unshift() demonstrates that you can add multiple elements to an array with one call to the function.

#### REMOVING ELEMENTS FROM AN ARRAY

* Removing an element from the end of an array is easy using the **pop()** mutator function:
```
    var nums = [1,2,3,4,5,9];
    nums.pop();
    print(nums); // 1,2,3,4,5
```
Without mutator functions, removing elements from the beginning of an array requires shifting elements toward the beginning of the array, causing the same inefficiency we see when adding elements to the beginning of an array:
```
    var nums = [9,1,2,3,4,5];
    print(nums);
    for (var i = 0; i < nums.length; ++i) {
       nums[i] = nums[i+1];
    }
    print(nums); // 1,2,3,4,5,
```
Besides the fact that we have to shift the elements down to collapse the array, we are also left with an extra element. We know this because of the extra comma we see when we display the array contents.

* The mutator function we need to remove an element from the beginning of an array is **shift()**. Here is how the function works:
```
    var nums = [9,1,2,3,4,5];
    nums.shift();
    print(nums); // 1,2,3,4,5
```
You’ll notice there are no extra elements left at the end of the array. Both **pop()** and **shift()** return the values they remove, so you can collect the values in a variable:
```
    var nums = [6,1,2,3,4,5];
    var first = nums.shift(); // first gets the value 6
    nums.push(first);
    print(nums); // 1,2,3,4,5,6
```

#### ADDING AND REMOVING ELEMENTS FROM THE MIDDLE OF AN ARRAY

Trying to add or remove elements at the end of an array leads to the same problems we find when trying to add or remove elements from the beginning of an array—both operations require shifting array elements either toward the beginning or toward the end of the array. However, there is one mutator function we can use to perform both operations—**splice()**.

To add elements to an array using **splice()**, you have to provide the following arguments:
* The starting index (where you want to begin adding elements)
* The number of elements to remove (0 when you are adding elements)
* The elements you want to add to the array

Let’s look at a simple example. The following program adds elements to the middle of an array:
```
    var nums = [1,2,3,7,8,9];
    var newElements = [4,5,6];
    nums.splice(3,0,newElements);
    print(nums); // 1,2,3,[4,5,6],7,8,9
```
The elements spliced into an array can be any list of items passed to the function, not necessarily a named array of items. For example:
```
    var nums = [1,2,3,7,8,9];
    nums.splice(3,0,4,5,6);
    print(nums);
```
In the preceding example, the arguments 4, 5, and 6 represent the list of elements we want to insert into nums.

Here is an example of using splice() to remove elements from an array:
```
    var nums = [1,2,3,100,200,300,400,4,5];
    nums.splice(3,4);
    print(nums); // 1,2,3,4,5
```

#### PUTTING ARRAY ELEMENTS IN ORDER

The last two mutator functions are used to arrange array elements into some type of order. The first of these, **reverse()**, reverses the order of the elements of an array. Here is an example of its use:
```
    var nums = [1,2,3,4,5];
    nums.reverse();
    print(nums); // 5,4,3,2,1
```

We often need to sort the elements of an array into order. The mutator function for this task, **sort()**, works very well with strings:
```
    var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
    nums.sort();
    print(nums); // Bryan,Clayton,Cynthia,David,Mike,Raymond
```
But sort() does not work so well with numbers:
```
    var nums = [3,1,2,100,4,200];
    nums.sort();
    print(nums); // 1,100,2,200,3,4
```

The sort() function sorts data lexicographically, assuming the data elements are strings, even though in the preceding example, the elements are numbers. We can make the sort() function work correctly for numbers by passing in an ordering function as the first argument to the function, which sort() will then use to sort the array elements. This is the function that sort() will use when comparing pairs of array elements to determine their correct order.

For numbers, the ordering function can simply subtract one number from another number. If the number returned is negative, the left operand is less than the right operand; if the number returned is zero, the left operand is equal to the right operand; and if the number returned is positive, the left operand is greater than the right operand.

With this in mind, let’s rerun the previous small program using an ordering function:
```
    function compare(num1, num2) {
       return num1 - num2;
    }

    var nums = [3,1,2,100,4,200];
    nums.sort(compare);
    print(nums); // 1,2,3,4,100,200
```
The sort() function uses the compare() function to sort the array elements numerically rather than lexicographically.

## Iterator Functions

The final set of array functions we examine are *iterator functions*. These functions apply a function to each element of an array, either returning a value, a set of values, or a new array after applying the function to each element of an array.

#### NON–ARRAY-GENERATING ITERATOR FUNCTIONS

The first group of iterator functions we’ll discuss do not generate a new array; instead, they either perform an operation on each element of an array or generate a single value from an array.

* The first of these functions is **forEach()**. This function takes a function as an argument and applies the called function to each element of an array. Here is an example of how it works:
```
    function square(num) {
      print(num, num * num);
    }

    var nums = [1,2,3,4,5,6,7,8,9,10];
    nums.forEach(square);
```
The output from this program is:
```
    1 1
    2 4
    3 9
    4 16
    5 25
    6 36
    7 49
    8 64
    9 81
    10 100
```

* The next iterator function, **every()**, applies a Boolean function to an array and returns true if the function can return true for every element in the array. Here is an example:
```
    function isEven(num) {
       return num % 2 == 0;
    }

    var nums = [2,4,6,8,10];
    var even = nums.every(isEven);
    if (even) {
       print("all numbers are even");
    }
    else {
       print("not all numbers are even");
    }
```
The program displays:
```
    all numbers are even
```
If we change the array to:
```
    var nums = [2,4,6,7,8,10];
```
the program displays:
```
    not all numbers are even
```

* The **some()** function will take a Boolean function and return true if at least one of the elements in the array meets the criterion of the Boolean function. For example:
```
    function isEven(num) {
       return num % 2 == 0;
    }

    var nums = [1,2,3,4,5,6,7,8,9,10];
    var someEven = nums.some(isEven);
    if (someEven) {
       print("some numbers are even");
    }
    else {
       print("no numbers are even");
    }
    nums = [1,3,5,7,9];
    someEven = nums.some(isEven);
    if (someEven) {
       print("some numbers are even");
    }
    else {
       print("no numbers are even");
    }
```
The output from this program is:
```
    some numbers are even
    no numbers are even
```

* The **reduce()** function applies a function to an accumulator and the successive elements of an array until the end of the array is reached, yielding a single value. Here is an example of using reduce() to compute the sum of the elements of an array:
```
    function add(runningTotal, currentValue) {
       return runningTotal + currentValue;
    }

    var nums = [1,2,3,4,5,6,7,8,9,10];
    var sum = nums.reduce(add);
    print(sum); // displays 55
```
The reduce() function, in conjunction with the add() function, works from left to right, computing a running sum of the array elements, like this:
```
    add(1,2) -> 3
    add(3,3) -> 6
    add(6,4) -> 10
    add(10,5) -> 15
    add(15,6) -> 21
    add(21,7) -> 28
    add(28,8) -> 36
    add(36,9) -> 45
    add(45,10) -> 55
```
We can also use reduce() with strings to perform concatenation:
```
    function concat(accumulatedString, item) {
       return accumulatedString + item;
    }

    var words = ["the ", "quick ","brown ", "fox "];
    var sentence = words.reduce(concat);
    print(sentence); // displays "the quick brown fox"
```
* JavaScript also provides a **reduceRight()** function, which works similarly to reduce(), only working from the righthand side of the array to the left, instead of from left to right. The following program uses reduceRight() to reverse the elements of an array:
```
    function concat(accumulatedString, item) {
       return accumulatedString + item;
    }

    var words = ["the ", "quick ","brown ", "fox "];
    var sentence = words.reduceRight(concat);
    print(sentence); // displays "fox brown quick the"
```

#### ITERATOR FUNCTIONS THAT RETURN A NEW ARRAY

There are two iterator functions that return new arrays: **map()** and **filter()**.

* The **map()** function works like the forEach() function, applying a function to each element of an array. The difference between the two functions is that map()returns a new array with the results of the function application. Here is an example:
```
    function curve(grade) {
       return grade += 5;
    }

    var grades = [77, 65, 81, 92, 83];
    var newgrades = grades.map(curve);
    print(newgrades); // 82, 70, 86, 97, 88
```
Here is an example using strings:
```
    function first(word) {
       return word[0];
    }

    var words = ["for","your","information"];
    var acronym = words.map(first);
    print(acronym.join("")); // displays "fyi"
```
For this last example, the *acronym* array stores the first letter of each word in the words array. However, if we want to display the elements of the array as a true acronym, we need to get rid of the commas that will be displayed if we just display the array elements using the implied toString() function. We accomplish this by calling the join() function with the empty string as the separator.

* The **filter()** function works similarly to every(), but instead of returning true if all the elements of an array satisfy a Boolean function, the function returns a new array consisting of those elements that satisfy the Boolean function. Here is an example:
```
    function isEven(num) {
       return num % 2 == 0;
    }

    function isOdd(num) {
       return num % 2 != 0;
    }

    var nums = [];
    for (var i = 0; i < 20; ++i) {
       nums[i] = i+1;
    }
    var evens = nums.filter(isEven);
    print("Even numbers: ");
    print(evens);
    var odds = nums.filter(isOdd);
    print("Odd numbers: ");
    print(odds);
```
This program returns the following output:
```
    Even numbers:
    2,4,6,8,10,12,14,16,18,20
    Odd numbers:
    1,3,5,7,9,11,13,15,17,19
```
Here is another interesting use of **filter()**:
```
    function passing(num) {
       return num >= 60;
    }

    var grades = [];
    for (var i = 0; i < 20; ++i) {
       grades[i] = Math.floor(Math.random() * 101);
    }
    var passGrades = grades.filter(passing);
    print("All grades: );
    print(grades);
    print("Passing grades: ");
    print(passGrades);
```
This program displays:
```
    All grades:
    39,43,89,19,46,54,48,5,13,31,27,95,62,64,35,75,79,88,73,74
    Passing grades:
    89,95,62,64,75,79,88,73,74
```
Of course, we can also use **filter()** with strings. Here is an example that applies the spelling rule “i before e except after c”:
```
    function afterc(str) {
       if (str.indexOf("cie") > -1) {
          return true;
       }
       return false;
    }

    var words = ["recieve","deceive","percieve","deceit","concieve"];
    var misspelled = words.filter(afterc);
    print(misspelled); // displays recieve,percieve,concieve
```
