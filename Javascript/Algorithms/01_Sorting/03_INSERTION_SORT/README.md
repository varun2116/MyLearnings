## INSERTION SORT

The **insertion sort** is analogous to the way humans sort data numerically or alphabetically. Let’s say I have asked each student in a class to turn in an index card with his or her name, student ID, and a short biographical sketch. The students return the cards in random order, but I want them alphabetized so I can compare them to my class roster easily.

I take the cards back to my office, clear off my desk, and pick the first card. The last name on the card is Smith. I place it at the top left corner of the desk and pick the second card. The last name on the card is Brown. I move Smith over to the right and put Brown in Smith’s place. The next card is Williams. It can be inserted at the far right of the desk without have to shift any of the other cards. The next card is Acklin. It has to go at the beginning of the list, so each of the other cards must be shifted one position to the right to make room for Acklin’s card. This is how the insertion sort works.

![](../img/insertsort.gif)

The insertion sort has two loops. The outer loop moves element by element through the array, while the inner loop compares the element chosen in the outer loop to the element next to it in the array. If the element selected by the outer loop is less than the element selected by the inner loop, array elements are shifted over to the right to make room for the inner-loop element, just as described in the previous name card example.

Here is the definition of **insertionSort()** function:
```
    function insertionSort() {
        var temp, inner;
        for (var outer = 1; outer < this.dataStore.length; outer++) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && this.dataStore[inner-1] >= temp) {
                this.dataStore[inner] = this.dataStore[inner-1];
                inner--;
            }
            this.dataStore[inner] = temp;
            print(this.toString() + "<br />");
        }
    }
```
The output is:
```
    9 5 2 10 4 10 6 1 9 3
    5 9 2 10 4 10 6 1 9 3
    2 5 9 10 4 10 6 1 9 3
    2 5 9 10 4 10 6 1 9 3
    2 4 5 9 10 10 6 1 9 3
    2 4 5 9 10 10 6 1 9 3
    2 4 5 6 9 10 10 1 9 3
    1 2 4 5 6 9 10 10 9 3
    1 2 4 5 6 9 9 10 10 3
    1 2 3 4 5 6 9 9 10 10

    1 2 3 4 5 6 9 9 10 10
```

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
