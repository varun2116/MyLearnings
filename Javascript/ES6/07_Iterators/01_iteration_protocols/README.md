## The iteration protocols

An iteration protocol is a set of rules that an object needs to follow for implementing the interface, which when used, a loop or a construct can iterate over a group of values of the object.

ES6 introduces two new iteration protocols known as the iterable protocol, and the iterator protocol.

### THE ITERATOR PROTOCOL

Any object that implements the iterator protocol is known as an **iterator**. According to the iterator protocol, an object needs to provide a `next()` method that returns the next item in the sequence of a group of items.

Here is an example to demonstrate this:
```
    let obj = {
        arr: [1, 2, 3, 4, 5],
        nextIndex: 0,
        next(){
            return this.nextIndex < this.arr.length ? {value: this.arr[this.nextIndex++], done: false} : {done: true};
        }
    }

    console.log(obj.next().value);
    console.log(obj.next().value);
    console.log(obj.next().value);
    console.log(obj.next().value);
    console.log(obj.next().value);
    console.log(obj.next().done);
```
The output is as follows:
```
    1
    2
    3
    4
    5
    true
```
Every time the `next()` method is called, it returns an object with two properties: *value* and *done*. Let's see what these two properties represent:

* The done property: This returns true if the iterator has finished iterating over the collection of values. Otherwise, this returns as false.
* The value property: This holds the value of the current item in the collection. It is omitted when the done property is true.

### THE ITERABLE PROTOCOL

Any object that implements the iterable protocol is known as an **iterable**. According to the iterable protocol, an object needs to provide the @@iterator method; that is, it must have the `Symbol.iterator` symbol as a property key. The @@iterator method must return an iterator object.

Here is an example to demonstrate this:
```
    let obj = {
        arr: [1, 2, 3, 4, 5],
        nextIndex: 0,
        [Symbol.iterator](){
            return {
                arr: this.arr,
                nextIndex: this.nextIndex,
                next(){
                    return this.nextIndex < this.arr.length ? {value: this.arr[this.nextIndex++], done: false} : {done: true};
                }
            }
        }
    }

    let iterable = obj[Symbol.iterator]();

    console.log(iterable.next().value);
    console.log(iterable.next().value);
    console.log(iterable.next().value);
    console.log(iterable.next().value);
    console.log(iterable.next().value);
    console.log(iterable.next().done);
```

The output is as follows:
```
    1
    2
    3
    4
    5
    true
```
