## A Hash Table Class

We need a class to represent the hash table. The class will include functions for computing hash values, a function for inserting data into the hash table, a function for retrieving data from the hash table, and a function for displaying the distribution of data in the hash table, as well as various utility functions we might need.

Here is the constructor function for our **HashTable class**:
```
    function HashTable() {
        this.table = new Array(137);
        this.simpleHash = simpleHash;
        this.showDistro = showDistro;
        this.put = put;
        this.get = get;
    }
```

### CHOOSING A HASH FUNCTION

The choice of a hash function depends on the data type of the key. If your key is an integer, then the simplest hash function is to return the key modulo the size of the array. There are circumstances when this function is not recommended, such as when the keys all end in 0 and the array size is 10. This is one reason the array size should always be a prime number, such as 137, which is the value we used in the preceding constructor function. Also, if the keys are random integers, then the hash function should more evenly distribute the keys. This type of hashing is known as *modular hashing*.

In many applications, the keys are strings. Choosing a hash function to work with string keys proves to be more difficult and should be chosen carefully.

A simple hash function that at first glance seems to work well is to *sum the ASCII value of the letters* in the key. The hash value is then that sum modulo the array size. Here is the definition for this simple hash function:
```
    function simpleHash(data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
```

We can finish up this first attempt at the *HashTable class* with definitions for **put()** and **showDistro()**, which place the data in the hash table and display the data from the hash table respectively. Here is the complete class definition:
```
    function HashTable() {
        this.table = new Array(137);
        this.simpleHash = simpleHash;
        this.showDistro = showDistro;
        this.put = put;
        //this.get = get;
    }

    function simpleHash(data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }

    function put(data) {
        var pos = this.simpleHash(data);
        this.table[pos] = data;
    }

    function showDistro() {
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i] != undefined) {
                print(i + " : " + this.table[i]);
            }
        }
    }
```

The test program to demonstrate how the simpleHash() function works.
```
    var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    var hTable = new HashTable();
    for (var i = 0; i < someNames.length; ++i) {
       hTable.put(someNames[i]);
    }
    hTable.showDistro();
```
The output is:
```
    35 : Cynthia
    45 : Clayton
    57 : Donnie
    77 : David
    95 : Danny
    116 : Mike
    132 : Jennifer
    134 : Jonathan
```

The *simpleHash()* function computes a hash value by summing the ASCII value of each name using the JavaScript function charCodeAt() to return a character’s ASCII value. The put() function receives the array index value from the simpleHash() function and stores the data element in that position. The showDistro() function displays where the names are actually placed into the array using the hash function. As you can see, the data is not particularly evenly distributed. The names are bunched up at the beginning and at the end of the array.

There is an even bigger problem than just the uneven distribution of names in the array, however. If you pay close attention to the output, you’ll see that not all the names in the original array of names are displayed. Let’s investigate further by adding a print() statement to the simpleHash() function:
```
    function simpleHash(data) {
        var total = 0;
        for (var i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        print("Hash Value: " + data + " -> " + total);
        return total % this.table.length;
    }
```
When we run the program again, we see the following output:
```
    Hash Value: David -> 488
    Hash Value: Jennifer -> 817
    Hash Value: Donnie -> 605
    Hash Value: Raymond -> 730
    Hash Value: Cynthia -> 720
    Hash Value: Mike -> 390
    Hash Value: Clayton -> 730
    Hash Value: Danny -> 506
    Hash Value: Jonathan -> 819
    35 : Cynthia
    45 : Clayton
    57 : Donnie
    77 : David
    95 : Danny
    116 : Mike
    132 : Jennifer
    134 : Jonathan
```
The problem is now apparent—the strings "Clayton" and "Raymond" hash to the same value, causing *a collision*. Because of the collision, only "Clayton" is stored in the hash table. We can improve our hash function to avoid such collisions, as discussed in the next section.

### A BETTER HASH FUNCTION

To avoid collisions, you first need to make sure the array you are using for the hash table is sized to a prime number. This is necessary due to the use of modular arithmetic in computing the key. The size of the array needs to be greater than 100 in order to more evenly disperse the keys in the table. Through experimentation, we found that the first prime number greater than 100 that didn’t cause collisions for the data set used in above program is 137. When smaller prime numbers close to 100 were used, there were still collisions in the data set.

After properly sizing the hash table, the next step to avoiding hashing collisions is to compute a better hash value. An algorithm known as **Horner’s method** does the trick. Without getting too deep into the mathematics of the algorithm, our new hash function still works by summing the ASCII values of the characters of a string, but it adds a step by multiplying the resulting total by a prime constant. Most algorithm textbooks suggest a small prime number, such as 31, which worked without causing collisions with out test data.

We now present a new, better hash function utilizing **Horner’s method**:
```
    function betterHash(data) {
        var H = 31, total = 0;
        for (var i = 0; i < data.length; i++) {
            total += H * total + data.charCodeAt(i);
        }
        total = total % this.table.length;
        if(total < 0){
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
```

Now use betterHash() method instead of simpleHash() in put() function.

Test program to test new hash function:
```
    var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    var hTable = new HashTable();
    for (var i = 0; i < someNames.length; ++i) {
       hTable.put(someNames[i]);
    }
    htable.showDistro();
```
The result of running this program is:
```
    3 : David
    25 : Raymond
    37 : Donnie
    61 : Jonathan
    75 : Danny
    82 : Mike
    102 : Jennifer
    130 : Clayton
    131 : Cynthia
```
All nine names are now present and accounted for.

### HASHING INTEGER KEYS

In the last section we worked with string keys. In this section, we introduce how to hash integer keys. The data set we’re working with is student grades. The key is a nine-digit student identification number, which we will generate randomly, along with the student’s grade. Here are the functions we use to generate the student data (ID and grade):

```
    function getRandomInt (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function genStuData(arr) {
        for (var i = 0; i < arr.length; ++i) {
            var num = "";
            for (var j = 1; j <= 9; ++j) {
               num += Math.floor(Math.random() * 10);
            }
            num += getRandomInt(50, 100);
            arr[i] = num;
        }
    }
```
The *getRandomInt()* function allows us to specify a maximum and minimum random number. For a set of student grades, it is reasonable to say that the minimum grade is 50 and the maximum grade is 100.

The *getStuData()* function generates student data. The inner loop generates the student ID number, and right after the inner loop finishes, a random grade is generated and concatenated to the student ID. Our main program will separate the ID from the grade. The hash function will total the individual digits in the student ID to compute a hash value using the *simpleHash()* function.

The Test program:
```
    var numStudents = 10;
    var arrSize = 97;
    var idLen = 9;
    var students = new Array(numStudents);
    genStuData(students);
    print ("Student data: \n");
    for (var i = 0; i < students.length; ++i) {
       print(students[i].substring(0,8) + " " +
             students[i].substring(9));
    }
    print("\n\nData distribution: \n");
    var hTable = new HashTable();
    for (var i = 0; i < students.length; ++i) {
       hTable.put(students[i]);
    }
    hTable.showDistro();
```
The output is:
```
    Student data:
    54263682 52
    77749594 53
    66897778 70
    58515011 81
    74430919 84
    74132615 72
    26211594 65
    21180241 98
    96155989 81
    06579268 86

    Data distribution:
    17 : 21180241198
    18 : 58515011381
    19 : 74132615172
    26 : 54263682352
    30 : 26211594965
    33 : 74430919484
    44 : 96155989381
    45 : 06579268886
    46 : 66897778170
```

Once again, our hash function creates *a collision*, and not all of the data is stored in the array. Actually, if you run the program several times, all of the data will sometimes get stored, but the results are far from consistent. We can play around with array sizes to see if we can fix the problem, or we can simply change the hash function called by the put() function and use *betterHash()*. When using betterHash() with the student data, we get the following output:

```
    Student data:
    49133107 51
    09215322 74
    55409426 54
    04719260 93
    41506380 63
    74067210 62
    93349253 78
    88572167 77
    67178014 97
    57537574 86

    Data distribution:
    1 : 55409426354
    47 : 57537574486
    70 : 88572167277
    73 : 09215322574
    85 : 93349253178
    98 : 67178014597
    109 : 41506380263
    114 : 04719260193
    123 : 49133107451
    134 : 74067210062
```
The lesson here is obvious: betterHash() is the superior hashing function for strings and for integers.
