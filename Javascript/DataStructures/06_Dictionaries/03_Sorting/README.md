## Adding Sorting to the Dictionary Class

The primary purpose of a dictionary is to retrieve a value by referencing its key. The actual order that the dictionary items are stored in is not a primary concern. However, many people like to see a listing of a dictionary in sorted order. Let’s see what it takes to display our dictionary items in sorted order.

Arrays can be sorted. For example:
```
    var a = new Array();
    a[0] = "Mike";
    a[1] = "David";
    print(a); // displays Mike,David
    a.sort();
    print(a); // displays David,Mike
```

We can’t perform the same test with string keys, however. The output from the program is empty. This is much the same problem we had earlier trying to define a count() function.

This isn’t really a problem, however. All that matters to the user of the class is that when the dictionary’s contents are displayed, the results are in sorted order. Here is a new definition for the showAll() function:
```
    function showAll() {
        var keys = Object.keys(this.dataStore).sort();
        for (var i = 0; i < keys.length; i++) {
            print(keys[i] + " -> " + this.dataStore[keys[i]]);
        }
    }
```
The only difference between this definition of the function and our earlier definition is we’ve added a call to sort() after we obtain the keys from the dataStore array.

Test Program is:
```
    var pbook = new Dictionary();
    pbook.add("Raymond","123");
    pbook.add("David", "345");
    pbook.add("Cynthia", "456");
    pbook.add("Mike", "723");
    pbook.add("Jennifer", "987");
    pbook.add("Danny", "012");
    pbook.add("Jonathan", "666");
    pbook.showAll();
```
The output for program is:
```
    Cynthia -> 456
    Danny -> 012
    David -> 345
    Jennifer -> 987
    Jonathan -> 666
    Mike -> 723
    Raymond -> 123
```
