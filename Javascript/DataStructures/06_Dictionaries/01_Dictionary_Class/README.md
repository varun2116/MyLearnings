## The Dictionary Class

The basis for the Dictionary class is the *Array* class rather than the *Object* class. Later in this chapter we are going to want to sort the keys of a dictionary, and JavaScript can’t sort the properties of an *Object*. Keep in mind, though, that everything in JavaScript is an object, so an array is an object.

We’ll start our definition of the **Dictionary class** with this code:
```
    function Dictionary() {
        this.dataStore = new Array();
    }
```

The first function to define is **add()**. This function takes two arguments, *a key* and *a value*. The key is the index for the value element. Here is the code:
```
    function add(key, value) {
        this.dataStore[key] = value;
    }
```

Next, we define the **find()** function. This function takes *a key* as its argument and returns the value associated with it. The code looks like this:
```
    function find(key) {
        return this.dataStore[key];
    }
```

Removing a key-value pair from a dictionary involves using a built-in JavaScript function: *delete*. This function is part of the Object class and takes a reference to *a key* as its argument. The function deletes both the key and the associated value. Here is the definition of our **remove()** function:
```
    function remove(key) {
        delete this.dataStore[key];
    }
```

Finally, we’d like to be able to view all the *key-value pairs* in a dictionary, so here is a function that accomplishes this task:
```
    function showAll() {
        for each(var key in Object.keys(this.dataStore)){
            print(key + " -> " + this.dataStore[key]);
        }
    }
```
The *keys()* function, when called with an object, returns all the keys stored in that object.

The test program:
```
    var pbook = new Dictionary();
    pbook.add("Mike","123");
    pbook.add("David", "345");
    pbook.add("Cynthia", "456");
    print("David's extension: " + pbook.find("David"));
    pbook.remove("David");
    pbook.showAll();
```

The output is:
```
    David's extension: 345
    Mike -> 123
    Cynthia -> 456
```
