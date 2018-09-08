## A List Class Implementation

A List class implementation can be taken straight from the List ADT we just defined. We’ll start with a definition of a constructor function, though it is not part of the ADT:
```
    function List(){
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = []; //initializes an empty array to store list elements
        this.clear = clear;
        this.find = find;
        this.toString = toString;
        this.insert = insert;
        this.append = append;
        this.remove = remove;
        this.front = front;
        this.end = end;
        this.prev = prev;
        this.next = next;
        this.length = length;
        this.currPos = currPos;
        this.moveTo = moveTo;
        this.getElement = getElement;
        this.length = length;
        this.contains = contains;
    }
```

### APPEND: ADDING AN ELEMENT TO A LIST

The first function we’ll implement is the *append()* function. This function appends a new element onto the list at the next available position, which will be equal to the value of the **listSize** variable:
```
    function append(element){
        this.dataStore[this.listSize++] = element;
    }
```
After the element is appended, **listSize** is incremented by 1.

### FIND: FINDING AN ELEMENT IN A LIST

The find function simply iterates through **dataStore** looking for the specified element. If the element is found, the function returns the position where the element was found. If the element wasn’t found, the function returns -1, which is a standard value to return when an element can’t be found in an array. To start, let’s define a helper function, **find()**, for finding the element:
```
    function find(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[i] == element){
                return i;
            }
        }
        return -1;
    }
```

### REMOVE: REMOVING AN ELEMENT FROM A LIST

Next, let’s see how to remove an element from a list. **remove()** is one of the harder functions to implement in the List class. First, we have to find the element in the list, and then we have to remove it and adjust the space in the underlying array to fill the hole left by removing an element. However, we can simplify the process by using the **splice()** mutator function.

The remove() function uses the position returned by find() to *splice* the dataStore array at that place. After the array is modified, **listSize** is decremented by 1 to reflect the new size of the list. The function returns true if an element is removed, and false otherwise. Here is the code:
```
    function remove(element) {
        var foundAt = this.find(element);
        if(foundAt > -1){
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
    }
```

### LENGTH: DETERMINING THE NUMBER OF ELEMENTS IN A LIST

The **length()** function returns the number of elements in a list:
```
    function length() {
        return this.listSize;
    }
```

### TOSTRING: RETRIEVING A LIST’S ELEMENTS

Now is a good time to create a function that allows us to view the elements of a list. Here is the code for a simple **toString()** function:
```
    function toString() {
        return this.dataStore;
    }
```
Strictly speaking, this function returns an *array object* and *not a string*, but its utility is in providing a view of the current state of an object, and just returning the array works adequately for this purpose.

Let’s take a break from implementing our **List class** to see how well it works so far. Here is a short test program that exercises the functions we’ve created so far:
```
    var names = new List();
    names.append("Cynthia");
    names.append("Raymond");
    names.append("Barbara");
    print(names.toString());
    names.remove("Raymond");
    print(names.toString());
```
The output from this program is:
```
    Cynthia,Raymond,Barbara
    Cynthia,Barbara
```

### INSERT: INSERTING AN ELEMENT INTO A LIST

The next function to discuss is **insert()**. What if, after removing Raymond from the preceding list, we decide we need to put him back where he was to begin with? An insertion function needs to know where to insert an element, so for now we will say that insertion occurs after a specified element already in the list. With this in mind, here is the definition of the insert() function:
```
    function insert(element, after) {
       var insertPos = this.find(after);
       if (insertPos > -1) {
          this.dataStore.splice(insertPos+1, 0, element);
          ++this.listSize;
          return true;
       }
       return false;
    }
```
insert() uses the helper function **find()** to determine the correct insertion position for the new element by finding the element specified in the after argument. Once this position is found, we use splice() to insert the new element into the list. Then we increment listSize by 1 and return true to indicate the insertion was successful.

### CLEAR: REMOVING ALL ELEMENTS FROM A LIST

Next, we need a function to clear out the elements of a list and allow new elements to be entered:
```
    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
```
The clear() function uses the delete operator to delete the dataStore array, and the next line re-creates the empty array. The last line sets the values of listSize and pos to 0 to indicate the start of a new list.

### CONTAINS: DETERMINING IF A GIVEN VALUE IS IN A LIST

The **contains()** function is useful when you want to check a list to see if a particular value is part of the list. Here is the definition:
```
    function contains(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[i] == element){
                return true;
            }
        }
        return false;
    }
```

### TRAVERSING A LIST

This final set of functions allows movement through a list, and the last function, **getElement()**, displays the current element in a list:
```
    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize - 1;
    }

    function prev() {
        if(this.pos > 0){
            this.pos--;
        }
    }

    function next() {
        if(this.pos < this.listSize - 1){
            this.pos++;
        }
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.dataStore[this.pos];
    }
```

Let’s create a new list of names to demonstrate how these functions work:
```
    var names = new List();
    names.append("Clayton");
    names.append("Raymond");
    names.append("Cynthia");
    names.append("Jennifer");
    names.append("Bryan");
    names.append("Danny");
```
Now let’s move to the first element of the list and display it:
```
    names.front();
    print(names.getElement()); // displays Clayton
```
Next, we move forward one element and display the element’s value:
```
    names.next();
    print(names.getElement());  // displays Raymond
```
Now we’ll move forward twice and backward once, displaying the current element to demonstrate how the prev() function works:
```
    names.next();
    names.next();
    names.prev();
    print(names.getElement()); // displays Cynthia
```
The behavior we’ve demonstrated in these past few code fragments is captured in the concept of an *iterator*. We explore iterators in the next section.
