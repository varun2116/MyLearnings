## An Array-Based Queue Class Implementation

Implementing the Queue class using an array is straightforward. Using JavaScript arrays is an advantage many other programming languages don’t have because JavaScript contains a function for easily adding data to the end of an array, *push()*, and a function for easily removing data from the front of an array, *shift()*.

The *push()* function places its argument at the first open position of an array, which will always be the back of the array, even when there are no other elements in the array. Here is an example:
```
    names = [];
    name.push("Cynthia");
    names.push("Jennifer");
    print(names); // displays Cynthia,Jennifer
```
Then we can remove the element from the front of the array using *shift()*:
```
    names.shift();
    print(names); // displays Jennifer
```

Now we’re ready to begin **implementing the Queue class** by defining the constructor function:
```
    function Queue() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
```

### APPEND: ADDING AN ELEMENT TO A QUEUE

The **enqueue()** function adds an element to the end of a queue:
```
    function enqueue(element) {
        this.dataStore.push(element);
    }
```

### REMOVE: REMOVING AN ELEMENT FROM A QUEUE

* The **dequeue()** function removes an element from the front of a queue:
```
    function dequeue() {
        return this.dataStore.shift();
    }
```

### FRONT AND BACK ELEMENTS OF A QUEUE

We can examine the **front** and **back** elements of a queue using these functions:
```
    function front() {
        return this.dataStore[0];
    }

    function back() {
        return this.dataStore[this.dataStore.length - 1];
    }
```

### TOSTRING: RETRIEVING A QUEUE’S ELEMENTS

We also need a **toString()** function to display all the elements in a queue:
```
    function toString() {
        var retStr = "", i =0;
        while (i < this.dataStore.length) {
            retStr += this.dataStore[i] + "\n";
            i++;
        }
        return retStr;
    }
```

### EMPTY: TO CHECK WHETHER QUEUE IS EMPTY

Finally, we need a function that lets us know if a queue is empty:
```
    function empty() {
        if(this.dataStore.length === 0){
            return true;
        }
        return false;
    }
```

### CLEAR: REMOVING ALL ELEMENTS FROM A QUEUE

Next, we need a function to clear out the elements of a queue and allow new elements to be entered:
```
    function clear() {
        this.dataStore = [];
    }
```

### LENGTH: DETERMINING THE NUMBER OF ELEMENTS IN A QUEUE

The **length()** function returns the number of elements in a queue:
```
    function length() {
        return this.dataStore.length;
    }
```

The test program:
```
    var q = new Queue();
    q.enqueue("Meredith");
    q.enqueue("Cynthia");
    q.enqueue("Jennifer");
    print(q.toString());
    print(q.length());
    q.dequeue();
    print(q.toString());
    print(q.length());
    print("Front of queue: " + q.front());
    print("Back of queue: " + q.back());
    q.clear();
    print(q.empty());
```
The output from the test program is:
```
    Meredith Cynthia Jennifer
    3
    Cynthia Jennifer
    2
    Front of queue: Cynthia
    Back of queue: Jennifer
    true
```
