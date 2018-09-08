## The Set Class Implementation

The **Set class** implementation is built around an array for storing the data. We also create functions for each of the set operations outlined above. Here is the definition for the constructor function:

```
    function Set() {
        this.dataStore = [];
        this.add = add;
        this.remove = remove;
        this.size = size;
        this.union = union;
        this.intersect = intersect;
        this.subset = subset;
        this.difference = difference;
        this.show = show;
    }
```

Let’s look at the **add()** function first:
```
    function add(data) {
        if(this.dataStore.indexOf(data) < 0){
            this.dataStore.push(data);
            return true;
        }
        else {
            return false;
        }
    }
```
Because a set can only contain *unique members*, before the add() function can store data in the array, it must check to make sure the data isn’t already in the array. We use the *indexOf()* function to check the array for the requested data. This function returns the position of an element in an array, or the value -1 if the array doesn’t contain the element. If the data isn’t stored in the array, the function pushes the data onto the array and returns *true*. Otherwise, the function returns *false*. We need to write add() as a Boolean function so we have to way to know for sure whether or not the data was added to the set.

The **remove()** function works similarly to the add() function. We first check to see if the requested data is in the array. If it is, we call the *splice()* function to remove the data and return true. Otherwise, we return false, indicating the requested data isn’t in the set. Here is the definition of **remove()**:
```
    function remove(data) {
        var pos = this.dataStore.indexOf(data);

        if(pos > -1){
            this.dataStore.splice(pos,1);
            return true;
        }
        else {
            return false;
        }
    }
```

Before we can test these functions, let’s define the **show()** function so we can see the members of a set:
```
    function show() {
        return this.dataStore;
    }
```

Using the Set class:
```
    var names = new Set();
    names.add("David");
    names.add("Jennifer");
    names.add("Cynthia");
    names.add("Mike");
    names.add("Raymond");
    if (names.add("Mike")) {
       print("Mike added")
    }
    else {
       print("Can't add Mike, must already be in set");
    }
    print(names.show());
    var removed = "Mike";
    if (names.remove(removed)) {
       print(removed + " removed.");
    }
    else {
       print(removed + " not removed.");
    }
    names.add("Clayton");
    print(names.show());
    if (names.remove("Mike")) {
       print(" Mike removed.");
    }
    else {
       print(" Mike not removed.");
    }
```
The output is:
```
    Can't add Mike, must already be in set
    David,Jennifer,Cynthia,Mike,Raymond
    Mike removed.
    David,Jennifer,Cynthia,Raymond,Clayton
    Mike not removed.
```
