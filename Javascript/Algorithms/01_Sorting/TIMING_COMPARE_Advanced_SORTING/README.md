## TIMING COMPARISONS OF THE Advanced SORTING ALGORITHMS

These three sorting algorithms shell, merge and quick sorts are very similar in complexity, and theoretically. To determine the differences in performance among these three algorithms, we can use an informal timing system to compare how long it takes them to sort data sets. Being able to time these algorithms is important because, while you won’t see much of a difference in times of the sorting algorithms when you’re sorting 100 elements or even 1,000 elements, there can be a huge difference in the times these algorithms take to sort millions of elements.

The timing system we will use in this section is based on retrieving the system time using the **JavaScript Date object’s getTime()** function. Here is how the function works:
```
    var start = new Date().getTime();
    print(start);
```
The *getTime()* function returns the system time in milliseconds.

For our comparison of the three basic sorting algorithms, we will time the three algorithms sorting arrays with data set sizes of 100, 1,000, and 10,000. We expect not to see much difference among the algorithms for data set sizes of 100 and 1,000, but we do expect there to be some difference when using a data set size of 10,000.

```
    var numElements = 100; //100, 10000, 100000
    //SHELLSORT
    var nums = new CArray(numElements);
    nums.setData();
    var start = new Date().getTime();
    nums.shellsort();
    var stop = new Date().getTime();
    var elapsed = stop - start;
    print("Shellsort with hard-coded gap sequence: " +
          numElements + " elements is: " + elapsed + " ms.");
    nums.clear();
    nums.setData();
    start = new Date().getTime();
    nums.shellsort1();
    stop = new Date().getTime();
    print("<br />Shellsort with dynamic gap sequence: " +
          numElements + " elements is: " +  elapsed + " ms.");

    print("<br />");
    //MERGESORT
    var nums = new CArray(numElements);
    nums.setData();
    var start = new Date().getTime();
    nums.mergeSort();
    var stop = new Date().getTime();
    var elapsed = stop - start;
    print("Elapsed time for the merge sort on " +
          numElements + " elements is: " +  elapsed + " milliseconds.");
    nums.clear();

    print("<br />");
    //QUICKSORT
    var nums = new CArray(numElements);
    nums.setData();
    var start = new Date().getTime();
    nums.qSort();
    var stop = new Date().getTime();
    var elapsed = stop - start;
    print("Elapsed time for the quick sort on " +
          numElements + " elements is: " +  elapsed + " milliseconds.");
    nums.clear();
```

The output is:
```
    Shellsort with hard-coded gap sequence: 100 elements is: 0 ms.
    Shellsort with dynamic gap sequence: 100 elements is: 0 ms.
    Elapsed time for the merge sort on 100 elements is: 2 milliseconds.
    Elapsed time for the quick sort on 100 elements is: 1 milliseconds.
```

For the next test, we change the **numElements** variable to 1,000. Here are the results:
```
    Shellsort with hard-coded gap sequence: 1000 elements is: 8 ms.
    Shellsort with dynamic gap sequence: 1000 elements is: 8 ms.
    Elapsed time for the merge sort on 1000 elements is: 5 milliseconds.
    Elapsed time for the quick sort on 1000 elements is: 2 milliseconds.
```

For the next test, we change the **numElements** variable to 10,000. Here are the results:
```
    Shellsort with hard-coded gap sequence: 10000 elements is: 18 ms.
    Shellsort with dynamic gap sequence: 10000 elements is: 18 ms.
    Elapsed time for the merge sort on 10000 elements is: 7 milliseconds.
    Elapsed time for the quick sort on 10000 elements is: 21 milliseconds.
```

For the next test, we change the **numElements** variable to 100,000. Here are the results:
```
    Shellsort with hard-coded gap sequence: 100000 elements is: 1193 ms.
    Shellsort with dynamic gap sequence: 100000 elements is: 1193 ms.
    Elapsed time for the merge sort on 100000 elements is: 42 milliseconds.
    Elapsed time for the quick sort on 100000 elements is: 102 milliseconds.
```
