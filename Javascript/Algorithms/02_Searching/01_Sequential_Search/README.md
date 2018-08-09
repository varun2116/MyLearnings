## Sequential Search

The most obvious way to search for data in a list is to begin at the first element and move to each element in the list until you either find the data you are looking for or you reach the end of the list. This is called a **sequential search**, sometimes also called a **linear search**. It is an example of *a brute-force search* technique, where potentially every element in the data structure is visited on the way to a solution.

Linear search runs in at worst linear time and makes at most `n` comparisons, where `n` is the length of the list.

![Sequential Search](../img/seqsearch.gif)

A sequential search is very easy to implement. Simply start a loop at the beginning of the list and compare each element to the data you are searching for. If you find a match, the search is over. If you get to the end of the list without generating a match, then the data searched for is not in the list.

The **seqSearch()** function
```
    function seqSearch(arr, data) {
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] == data){
                return true;
            }
        }
        return false;
    }
```
If the data argument is found in the array, the function returns *true* immediately. If the function gets to the end of the array without finding a match, the function returns *false*.

A program to test our sequential search function, including a function to make it easy to display the array’s contents. We use random number generation to populate an array with random numbers in the range of 1 to 100. We also use a function to display the contents of the array,
```
    function dispArr(arr) {
        for (var i = 0; i < arr.length; i++) {
            print(arr[i]);
            if(i > 0 && i % 10 == 0)
                print("<br />")
        }
    }

    var nums = [];
    for (var i = 0; i < 100; i++) {
        nums[i] = Math.floor(Math.random() * 101);
    }
    dispArr(nums);
    print();
    var num = 23;
    if (seqSearch(nums, num)) {
       print(num + " is in the array.");
    }
    else {
       print(num + " is not in the array.");
    }
```
This program creates an array with random numbers in the range of 0 to 100. Finally, the program displays the complete array as proof of the validity of the function’s return value. Here is a sample run of the program:
```
    87 77 30 9 96 12 91 97 30 22 25
    66 96 10 18 48 94 21 10 83 36
    81 7 20 55 14 32 93 2 77 10
    25 77 80 12 64 80 16 80 49 36
    43 88 38 31 65 81 42 28 56 87
    51 10 30 35 58 71 48 23 41 89
    61 18 39 68 14 51 13 51 42 50
    57 34 73 6 15 26 29 38 67 9
    96 34 87 69 72 40 54 27 81 12
    5 3 55 59 77 75 34 84 7
    23 is in the array.
```

We can also write the sequential search function so that it returns the position where a match is found. The definition of this new version of **seqSearch()**.
```
    function seqSearch(arr, data) {
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] == data){
                return i;
            }
        }
        return -1;
    }
```
Notice that if the element searched for is not found, the function returns -1. This is the best value to return for the function since an array element cannot be stored in position -1.

A program that uses this second definition of **seqSearch()**.
```
    var nums = [];
    for (var i = 0; i < 100; i++) {
        nums[i] = Math.floor(Math.random() * 101);
    }
    dispArr(nums);
    print();
    var num = 23;
    var pos = seqSearch(nums, num);
    if (pos > -1) {
       print(num + " is in the array at position " + pos);
    }
    else {
       print(num + " is not in the array.");
    }
```

Here is one run of the program:
```
    7 41 91 38 65 53 8 85 13 68 61
    84 35 65 48 73 71 17 8 40 44
    83 90 51 94 35 86 84 95 34 87
    50 66 17 40 100 88 67 19 21 100
    14 9 63 9 54 48 100 58 21 94
    78 28 5 31 55 14 11 67 99 91
    47 65 1 10 24 32 33 93 87 98
    59 73 31 36 5 30 38 17 69 11
    42 15 40 49 23 86 18 76 91 87
    99 63 23 20 83 16 17 24 100
    23 is in the array at position 85
```

Keep in mind that the seqSearch() function is not as fast as the built-in Array.indexOf() function, but is shown here to demonstrate how search works.

### SEARCHING FOR MINIMUM AND MAXIMUM VALUES

### USING SELF-ORGANIZING DATA

## Complexity
Time Complexity: `O(n)` - since in worst case we're checking each element exactly once.
