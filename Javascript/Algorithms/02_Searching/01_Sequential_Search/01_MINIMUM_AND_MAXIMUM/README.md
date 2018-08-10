## SEARCHING FOR MINIMUM AND MAXIMUM VALUES

In a sorted data structure, searching for these values is a trivial task. Searching an unsorted data structure, on the other hand, is a more challenging task.

Let’s start by determining how we should search an array for a minimum value. Here is one algorithm:
1. Assign the first element of the array to a variable as the minimum value.

2. Begin looping through the array, starting with the second element, comparing each element with the current minimum value.

3. If the current element has a lesser value than the current minimum value, assign the current element as the new minimum value.

4. Move to the next element and repeat step 3.

5. The minimum value is stored in the variable when the program ends.

This algorithm is easily transformed into a JavaScript function,
```
    function findMin(arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }
```

Here is a small program to test:
```
    var nums = [];
    for (var i = 0; i < 100; ++i) {
       nums[i] = Math.floor(Math.random() * 101);
    }
    var minValue = findMin(nums);
    dispArr(nums);
    print();
    print("The minimum value is: " + minValue);
```

Here is the output from running this program:
```
    35 9 27 55 96 76 33 58 49 32 33
    96 79 70 15 92 19 92 35 38 12
    96 81 19 2 88 56 66 52 40 84
    54 51 67 17 66 35 2 74 6 72
    43 92 48 28 99 17 52 86 21 96
    34 27 10 53 87 56 2 46 65 69
    29 62 83 67 85 73 74 57 3 2
    34 22 23 56 10 70 79 25 71 74
    57 91 73 92 77 91 85 31 72 18
    77 50 60 83 39 67 100 69 24

    The minimum value is: 2
```

The algorithm for finding the **maximum value** works in a similar fashion. We assign the first element of the array as the maximum value and then loop through the rest of the array, comparing each element to the current maximum value. If the current element is greater than the current maximum value, that element’s value is stored in the variable.

```
    function findMax(arr) {
        var max = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
```

Here is a small program to test:
```
    var nums = [];
    for (var i = 0; i < 100; ++i) {
       nums[i] = Math.floor(Math.random() * 101);
    }
    var minValue = findMin(nums);
    dispArr(nums);
    print();
    print();
    print("The minimum value is: " + minValue);
    var maxValue = findMax(nums);
    print();
    print();
    print("The maximum value is: " + maxValue);
```

The output from this program is:
```
    86 19 55 12 59 83 20 12 19 76 78
    45 86 33 17 2 66 99 61 30 40
    16 66 22 24 86 68 55 87 65 30
    79 89 62 16 24 38 63 56 55 61
    72 84 31 25 71 32 90 96 92 98
    100 5 51 98 66 37 11 51 45 57
    9 38 58 85 35 47 68 16 41 85
    61 3 5 53 2 58 9 32 86 61
    3 79 91 74 90 12 26 24 92 50
    60 100 8 94 17 6 52 20 98

    The minimum value is: 2

    The maximum value is: 100
```
