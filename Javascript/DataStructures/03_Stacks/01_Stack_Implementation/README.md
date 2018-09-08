## A Stack Implementation
To build a stack, we first need to decide on the underlying data structure we will use to store the stack elements. We will use an array in our implementation.

We begin our stack implementation by defining the constructor function for a **Stack** class:
```
    function Stack() {
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
    }
```
The array that stores the stack elements is named **dataStore**. The constructor sets it to an empty array. The **top** variable keeps track of the top of the stack and is initially set to 0 by the constructor, indicating that the 0 position of the array is the top of the stack, at least until an element is pushed onto the stack.

The first function to implement is the **push()** function. When we push a new element onto a stack, we have to store it in the top position and increment the top variable so that the new top is the next empty position in the array. Here is the code:
```
    function push(element) {
        this.dataStore[this.top++] = element;
    }
```
Pay particular attention to the placement of the increment operator *after* the call to this.top. Placing the operator there ensures that the current value of top is used to place the new element at the top of the stack before top is incremented.

The **pop()** function does the reverse of the push() function—it returns the element in the top position of the stack and then decrements the top variable:
```
    function pop() {
        return this.dataStore[--this.top];
    }
```

The **peek()** function returns the top element of the stack by accessing the element at the top-1 position of the array:
```
    function peek() {
        return this.dataStore[this.top-1];
    }
```
If you call the peek() function on an empty stack, you get *undefined* as the result. That’s because there is no value stored at the top position of the stack since it is empty.

There will be situations when you need to know how many elements are stored in a stack. The **length()** function returns this value by returning the value of top:
```
    function length() {
        return this.top;
    }
```

Finally, we can **clear** a stack by simply setting the top variable back to 0:
```
    function clear() {
        this.top = 0;
    }
```

Testing the Stack class implementation
```
    var s = new Stack();
    s.push("David");
    s.push("Raymond");
    s.push("Bryan");
    print("length: " + s.length());
    print(s.peek());
    var popped = s.pop();
    print("The popped element is: " + popped);
    print(s.peek());
    s.push("Cynthia");
    print(s.peek());
    s.clear();
    print("length: " + s.length());
    print(s.peek());
    s.push("Clayton");
    print(s.peek());
```
The output from above code is:
```
    length: 3
    Bryan
    The popped element is: Bryan
    Raymond
    Cynthia
    length: 0
    undefined
    Clayton
```
The next-to-last value, **undefined**, is returned because once a stack is cleared, there is no value in the top position and when we peek at the top of the stack, undefined is returned.
