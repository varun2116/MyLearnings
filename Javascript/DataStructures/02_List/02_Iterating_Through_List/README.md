## Iterating Through a List

An iterator allows us to traverse a list without referencing the internal storage mechanism of the List class. The functions *front()*, *end()*, *prev()*, *next()*, and *currPos* provide an implementation of an iterator for our List class. Some advantages to using iterators over using array indexing include:

* Not having to worry about the underlying data storage structure when accessing list elements
* Being able to update the list and not having to update the iterator, where an index becomes invalid when a new element is added to the list
* Providing a uniform means of accessing elements for different types of data stores used in the implemenation of a List class

With these advantages in mind, here is how to use an iterator to traverse through a list:
```
    for(names.front(); names.currPos() < names.length(); names.next()) {
       print(names.getElement());
    }
```

The for loop starts by setting the current position to the front of the list. The loop continues while the value of currPos is less than the length of the list. Each time through the loop, the current position is moved one element forward through the use of the next() function.

We can also traverse a list backward using an iterator. Here is the code:
```
    for(names.end(); names.currPos() >= 0; names.prev()) {
       print(names.getElement());
    }
```

The loop starts at the last element of the list and moves backward using the prev() function while the current position is greater than or equal to 0.

Iterators are used only to move through a list and should not be combined with any functions for adding or removing items from a list.
