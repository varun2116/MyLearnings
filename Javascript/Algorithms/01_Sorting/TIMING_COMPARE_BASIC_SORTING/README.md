## TIMING COMPARISONS OF THE BASIC SORTING ALGORITHMS

These three sorting algorithms bubble, selection and insertion are very similar in complexity, and theoretically, they should perform similarly. To determine the differences in performance among these three algorithms, we can use an informal timing system to compare how long it takes them to sort data sets. Being able to time these algorithms is important because, while you won’t see much of a difference in times of the sorting algorithms when you’re sorting 100 elements or even 1,000 elements, there can be a huge difference in the times these algorithms take to sort millions of elements.

The timing system we will use in this section is based on retrieving the system time using the **JavaScript Date object’s getTime()** function. Here is how the function works:
```
    var start = new Date().getTime();
    print(start);
```
The *getTime()* function returns the system time in milliseconds.

For our comparison of the three basic sorting algorithms, we will time the three algorithms sorting arrays with data set sizes of 100, 1,000, and 10,000. We expect not to see much difference among the algorithms for data set sizes of 100 and 1,000, but we do expect there to be some difference when using a data set size of 10,000.

Let’s start with an array of 100 randomly chosen integers. We also add a function for creating a new data set for each algorithm.
```
    var numElements = 100;
    var nums = new CArray(numElements);
    nums.setData();

    var start = new Date().getTime();
    nums.bubbleSort();
    var stop = new Date().getTime();
    var elapsed = stop - start;
    print("Elapsed time for the bubble sort on " +
          numElements + " elements is: " + elapsed + " milliseconds.");
    print("<br />");
    start = new Date().getTime();
    nums.selectionSort();
    stop = new Date().getTime();
    elapsed = stop - start;
    print("Elapsed time for the selection sort on " +
          numElements + " elements is: " +  elapsed + " milliseconds.");
    print("<br />");
    start = new Date().getTime();
    nums.insertionSort();
    stop = new Date().getTime();
    elapsed = stop - start;
    print("Elapsed time for the insertion sort on " +
           numElements + " elements is: " + elapsed + " milliseconds.");
```
The output is:
```
    Elapsed time for the bubble sort on 100 elements is: 0 milliseconds.
    Elapsed time for the selection sort on 100 elements is: 2 milliseconds.
    Elapsed time for the insertion sort on 100 elements is: 0 milliseconds.
```
Clearly, there is not any significant difference among the three algorithms.

For the next test, we change the **numElements** variable to 1,000. Here are the results:
```
    Elapsed time for the bubble sort on 1000 elements is: 6 milliseconds.
    Elapsed time for the selection sort on 1000 elements is: 3 milliseconds.
    Elapsed time for the insertion sort on 1000 elements is: 1 milliseconds.
```
For 1,000 numbers, the selection sort and the insertion sort are almost twice as fast as the bubble sort.

Finally, we test the algorithms with 10,000 numbers:
```
    Elapsed time for the bubble sort on 10000 elements is: 274 milliseconds.
    Elapsed time for the selection sort on 10000 elements is: 99 milliseconds.
    Elapsed time for the insertion sort on 10000 elements is: 3 milliseconds.
```

The results for 10,000 numbers are consistent with the results for 1,000 numbers. Selection sort and insertion sort are faster than the bubble sort, and the insertion sort is the fastest of the three sorting algorithms. Keep in mind, however, that these tests must be run several times for the results to be considered statistically valid.
