## Auxiliary Functions for the Dictionary Class

We can define several functions that can help in special situations. For example, it is nice to know how many entries there are in a dictionary. Here is a **count()** function definition:
```
    function count() {
        var n = 0
        for (var key in this.dataStore) {
            n++;
        }
        return n;
    }
```
You might be wondering why the *length property* wasn’t used for the count() function. The reason is that length doesn’t work with string keys. For example:
```
    var nums() = new Array();
    nums[0] = 1;
    nums[1] = 2;
    print(nums.length); // displays 2
    var pbook = new Array();
    pbook["David"] = 1;
    pbook["Jennifer"] = 2;
    print(pbook.length); // displays 0
```

Another helper function we can use is a **clear()** function. Here’s the definition:
```
    function clear() {
        for (var key in this.dataStore) {
          delete this.dataStore[key];
        }
    }
```

Updated Dictionary class definition:
```
    function Dictionary() {
        this.dataStore = new Array();
        this.add = add;
        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
        this.count = count;
        this.clear = clear;
    }
```

Test program is:
```
    var pbook = new Dictionary();
    pbook.add("Raymond","123");
    pbook.add("David", "345");
    pbook.add("Cynthia", "456");
    print("Number of entries: " + pbook.count());
    print("David's extension: " + pbook.find("David"));
    pbook.showAll();
    pbook.clear();
    print("Number of entries: " + pbook.count());
```

The output from code is:
```
    Number of entries: 3
    David's extension: 345
    Raymond -> 123
    David -> 345
    Cynthia -> 456
    Number of entries: 0
```
