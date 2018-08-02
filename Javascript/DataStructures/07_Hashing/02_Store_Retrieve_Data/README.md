### STORING AND RETRIEVING DATA IN A HASH TABLE

Now that we’ve covered hash functions, we can apply this knowledge to use a hash table to actually store data. To do this, we have to modify the **put()** function so that it accepts both a key and data, hashes the key, and then uses that information to store the data in the table. Here is the definition of the new **put()** function:
```
    function put(key, data) {
        var pos = this.betterHash(key);
        this.table[pos] = data;
    }
```
The *put()* function hashes the key and then stores the data in the position of the table computed by the hash function.

Next we need to define the **get()** function so that we can retrieve data stored in a hash table. This function must, again, hash the key so that it can determine where the data is stored, and then retrieve the data from its position in the table. Here is the definition:
```
    function get(key) {
        return this.table[this.betterHash(key)];
    }
```

Here is a program to test the put() and get() functions:
```
    var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    var someNumbers = ["1234", "5678", "1000", "4355", "2394", "5384", "9348", "3945", "3934", "3289"];
    var hTable = new HashTable();
    for (var i = 0; i < someNames.length; ++i) {
       hTable.put(someNames[i], someNumbers[i]);
    }
    hTable.showDistro();
    print("David :" + hTable.get("David"));
```
```
    3 : 1234
    25 : 4355
    37 : 1000
    61 : 3934
    75 : 3945
    82 : 5384
    102 : 5678
    130 : 9348
    131 : 2394
    David :1234
```
