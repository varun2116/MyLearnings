## Sorting Data with Queues

Queues are not only useful for simulations; they can also be used to sort data. Back in the old days of computing, programs were entered into a mainframe program via punch cards, with each card holding a single program statement. The cards were sorted using a mechanical sorter that utilized bin-like structures to hold the cards. We can simulate this process by using a set of queues. This sorting technique is called a **radix sort** (see Data Structures with C++ [Prentice Hall]). It is not the fastest of sorting algorithms, but it does demonstrate an interesting use of queues.

The radix sort works by making two passes over a data set, in this case the set of integers from 0 to 99. The first pass sorts the numbers based on the 1s digit, and the second pass sorts the numbers based on the 10s digit. Each number is placed in a bin based on the digit in each of these two places. Given these numbers:
```
    91, 46, 85, 15, 92, 35, 31, 22
```

the first pass of the radix sort results in the following bin configuration:
```
    Bin 0:
    Bin 1: 91, 31
    Bin 2: 92, 22
    Bin 3:
    Bin 4:
    Bin 5: 85, 15, 35
    Bin 6: 46
    Bin 7:
    Bin 8:
    Bin 9:
```

Now the numbers are sorted based on which bin they are in:
```
    91, 31, 92, 22, 85, 15, 35, 46
```

Next, the numbers are sorted by the 10s digit into the appropriate bins:
```
    Bin 0:
    Bin 1: 15
    Bin 2: 22
    Bin 3: 31, 35
    Bin 4: 46
    Bin 5:
    Bin 6:
    Bin 7:
    Bin 8: 85
    Bin 9: 91, 92
```

Finally, take the numbers out of the bins and put them back into a list, and you get the following sorted list of integers:
```
    15, 22, 31, 35, 46, 85, 91, 92
```

We can implement this algorithm by using queues to represent the bins. We need nine queues, one for each digit. We will store the queues in an array. We uses the modulus and integer division operations for determining the 1s and 10s digits. The remainder of the algorithm entails adding numbers to their appropriate queues, taking the numbers out of the queues to re-sort them based on the 1s digit, and the repeating the process for the 10s digit. The result is a sorted set of integers.

First, here is the function that distributes numbers by the place (1s or 10s) digit:
```
    function distribute(nums, queues, n, digit) { // digit represents either the 1s or 10s place
        for (var i = 0; i < n; ++i) {
            if (digit == 1) {
                queues[nums[i]%10].enqueue(nums[i]);
            }
            else {
                queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
            }
        }
    }
```
Here is the function for collecting numbers from the queues:
```
    function collect(queues, nums) {
        var i = 0;
        for (var digit = 0; digit < 10; ++digit) {
            while (!queues[digit].empty()) {
                nums[i++] = queues[digit].dequeue();
            }
        }
    }
```

```
    function dispArray(arr) {
        var res = "";
        for (var i = 0; i < arr.length; ++i) {
            res += arr[i] + " ";
        }
        print(res);
    }

    var queues = [];
    for (var i = 0; i < 10; ++i) {
       queues[i] = new Queue();
    }
    var nums = [];
    for (var i = 0; i < 10; ++i) {
       nums[i] = Math.floor(Math.floor(Math.random() * 101));
    }
    print("Before radix sort: ");
    dispArray(nums);
    distribute(nums, queues, 10, 1);
    collect(queues, nums);
    distribute(nums, queues, 10, 10);
    collect(queues, nums);
    print("\n\nAfter radix sort: ");
    dispArray(nums);
```
Here are a couple of runs of the program:
```
    Before radix sort:
    50 83 99 1 61 6 35 12 18 50
    After radix sort:
    1 6 12 18 35 50 50 61 83 99
    Before radix sort:
    54 39 19 84 39 78 62 39 83 9
    After radix sort:
    9 19 39 39 39 54 62 78 83 84
```
