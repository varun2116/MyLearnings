# Generators

Generators, also called **iterator factories**, are a new type of JavaScript function that creates specific iterations. They give you special, self-defined ways to loop over stuff.

A generator function is like a normal function, but instead of returning a single value, it returns multiple values one by one. Calling a generator function doesn't execute its body immediately, but rather returns a new instance of the generator object (that is, an object that implements both, iterable and iterator protocols).

Every generator object holds a new execution context of the generator function. When we execute the **next()** method of the generator object, it executes the generator function's body until the **yield** keyword is encountered. It returns the yielded value, and pauses the function. When the **next()** method is called again, it resumes the execution, and then returns the next yielded value. The **done** property is true when the generator function doesn't yield any more value.

A generator function is written using the **function*** expression. Here is an example to demonstrate this:
```
    function* generator_function() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    }

    let generator = generator_function();

    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().done);

    generator = generator_function();
    let iterable = generator[Symbol.iterator]();

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
    1
    2
    3
    4
    5
    true
```
There is an expression following the **yield** keyword. The value of the expression is what returned by the generator function via the iterable protocol. If we omit the expression, then **undefined** is returned. The value of the expression is what we call as the yielded value.

We can also pass an optional argument to the **next()** method. This argument becomes the value returned by the **yield** statement, where the generator function is currently paused. Here is an example to demonstrate this:
```
    function* generator_function() {
        let a = yield 12;
        let b = yield a + 1;
        let c = yield b + 2;
        yield c + 3;
    }

    let generator = generator_function();
    console.log(generator.next().value);
    console.log(generator.next(5).value);
    console.log(generator.next(11).value);
    console.log(generator.next(78).value);
    console.log(generator.next().done);
```
The output is as follows:
```
    12
    6
    13
    81
    true
```

## The return(value) method

You can anytime end a generator function before it has yielded all the values using the **return()** method of the generator object. The **return()** method takes an optional argument, representing the final value to return.

Here is an example demonstrating this:
```
    function* generator_function() {
        yield 1;
        yield 2;
        yield 3;
    }

    let generator = generator_function();
    console.log(generator.next().value);
    console.log(generator.return(22).value);
    console.log(generator.next().done);
```
The output is as follows:
```
    1
    22
    true
```

## The throw(exception) method

You can manually trigger an exception inside a generator function using the **throw()** method of the generator object. You must pass an exception to the throw() method that you want to throw. Here is an example to demonstrate this:
```
    function* generator_function() {
        try {
            yield 1;
        } catch (e) {
            console.log("1st Exception");
        }
        try {
            yield 2;
        } catch (e) {
            console.log("2nd Exception");
        }
    }

    var generator = generator_function();

    console.log(generator.next().value);
    console.log(generator.throw("exception string").value);
    console.log(generator.throw("exception string").done);
```
The output is as follows:
```
    1
    1st Exception
    2
    2nd Exception
    true
```
In the preceding example, you can see that the exception is thrown where the function was paused the last time. After the exception is handled, the throw() method continuous execution, and returns the next yielded value.

## The `yield*` keyword

The **yield*** keyword inside a generator function takes an iterable object as the expression and iterates it to yield its values. Here is an example to demonstrate this:
```
    function* generator_function1() {
        yield 2;
        yield 3;
    }

    function* generator_function2() {
        yield 1;
        yield* generator_function1();
        yield* [4,5];
    }

    var generator = generator_function2();

    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().value);
    console.log(generator.next().done);
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

## Using for...of

```
    function* generator_function() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    }

    for (let val of generator_function()) {
        console.log(val);
    }
```
