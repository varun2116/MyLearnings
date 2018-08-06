## Set Operations

The more interesting functions to define are *union()*, *intersect()*, *subset()*, and *difference()*.

The **union()** function combines two sets using the union set operation to form a new set. The function first builds a new set by adding all the members of the first set. Then the function checks each member of the second set to see whether the member is already a member of the first set. If it is, the member is skipped over, and if not, the member is added to the new set.

Before we define union(), however, we need to define a helper function, *contains()*, which looks to see if a specified member is part of a set. Here is the definition for **contains()**:
```
    function contains(data) {
        if(this.dataStore.indexOf(data) == -1){
            return false;
        }
        else {
            return true;
        }
    }
```

Now we can define the **union()** function:
```
    function union(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; i++) {
            tempSet.add(this.dataStore[i]);
        }
        for (var i = 0; i < set.dataStore.length; i++) {
          // if (! tempSet.contains(set.dataStore[i])) {
          //     tempSet.add(set.dataStore[i]);
          // }
          tempSet.add(set.dataStore[i]);
        }
        return tempSet;
    }
```

Set intersection is performed using a function named *intersect()*. This function is easier to define. Each time a member of the first set is found to be a member of the second set it is added to a new set, which is the return value of the function. Here is the definition:
```
    function intersect(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; i++) {
            if(set.contains(this.dataStore[i])){
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
```

Test program demonstrates the use of union() and intersect():
```
    var cis = new Set();
    cis.add("Mike");
    cis.add("Clayton");
    cis.add("Jennifer");
    cis.add("Raymond");
    var dmp = new Set();
    dmp.add("Raymond");
    dmp.add("Cynthia");
    dmp.add("Jonathan");
    var it = new Set();
    it = cis.union(dmp);
    print(it.show()); // diplays Mike,Clayton,Jennifer,Raymond,Cynthia,Jonathan
    var inter = cis.intersect(dmp);
    print(inter.show()); // displays Raymond
```
The next operation to define is *subset*. The **subset()** function first has to check to make sure that the proposed subset’s length is less than the larger set we are comparing with the subset. If the subset length is greater than the original set, then it cannot be a subset. Once it is determined that the subset size is smaller, the function then checks to see that each member of the subset is a member of the larger set. If any one member of the subset is not in the larger set, the function returns *false* and stops. If the function gets to the end of the larger set without returning *false*, the subset is indeed a subset and the function returns *true*. The definition is below:
```
    function subset(set) {
        if(this.size() > set.size()){
            return false;
        }
        else {
            for (var i = 0; i < this.dataStore.length; i++) {
                if(! set.contains(this.dataStore[i])){
                    return false;
                }
            }
        }
        return true;
    }
```

The subset() function uses the *size()* function before checking to see if each element of the sets match. Here is the code for the **size()** function:
```
    function size() {
        return this.dataStore.length;
    }
```
Test program computes the subset of two sets.
```
    var it = new Set();
    it.add("Cynthia");
    it.add("Clayton");
    it.add("Jennifer");
    it.add("Danny");
    it.add("Jonathan");
    it.add("Terrill");
    it.add("Raymond");
    it.add("Mike");
    var dmp = new Set();
    dmp.add("Cynthia");
    dmp.add("Raymond");
    dmp.add("Jonathan");
    if (dmp.subset(it)) {
       print("DMP is a subset of IT.");
    }
    else {
       print("DMP is not a subset of IT.");
    }
```

Displays following output:
```
    DMP is a subset of IT.
```

If we add one new member to the dmp set:
```
    dmp.add("Shirley");
```
then the program displays:
```
    DMP is not a subset of IT.
```

The last operational function is *difference()*. This function returns a set that contains those members of the first set that are not in the second set. The definition for **difference()** is shown below:
```
    function difference(set) {
        var tempSet = new Set();
        for (var i = 0; i < this.dataStore.length; i++) {
            if(! set.contains(this.dataStore[i])){
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }
```

The test program computes the difference of two sets.
```
    var cis = new Set();
    var it = new Set();
    cis.add("Clayton");
    cis.add("Jennifer");
    cis.add("Danny");
    it.add("Bryan");
    it.add("Clayton");
    it.add("Jennifer");
    var diff = new Set();
    diff = cis.difference(it);
    print("[" + cis.show() + "] difference [" + it.show()
          + "] -> [" + diff.show() + "]");
```
The output is:
```
    [Clayton,Jennifer,Danny] difference [Bryan,Clayton,Jennifer] -> [Danny]
```
