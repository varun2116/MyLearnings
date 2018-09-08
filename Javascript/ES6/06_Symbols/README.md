# Symbols

ES6 symbols are the new primitive type introduced in ES6. A symbol is a **unique** and **immutable** value.

> Unique and immutable data type to be used as an identifier for object properties. Symbol can have an optional description, but for debugging purposes only.

Here is an example code, which shows how to create a symbol:
```
    let s = Symbol();
```
Symbols don't have a literal form; therefore, we need to use the `Symbol()` function to create a symbol. The Symbol() function returns a **unique symbol** every time it is called.

The Symbol() function takes an optional string parameter that represents the description of the symbol. A description of a symbol can be used for debugging, but not to access the symbol itself. Two symbols with the same description are **not equal at all**. Here is an example to demonstrate this:
```
    let s1 = Symbol("My Symbol");
    let s2 = Symbol("My Symbol");

    console.log(s1 === s2); // output false
```

## The `typeof` Operator

The typeof operator outputs "symbol" when applied on a variable, holding a symbol. Here is an example to demonstrate this:
```
    let s = Symbol();
    console.log(typeof s);
```
Using the typeof operator is the only way to identify whether a variable is holding a symbol.

## Using symbols as property keys

Till ES5, the JavaScript object property keys had to be string type. But in ES6, the JavaScript object property keys can be strings or symbols.

Here is an example that demonstrates how to use a symbol as an object property key:
```
    let obj = null, s1 =null;
    {
        let s2 = Symbol();
        s1 = s2;
        obj = {
            [s2]: "mySymbol"
        };

        console.log(obj[s2]);
        console.log(obj[s2] == obj[s1]);
    }

    console.log(obj[s1]);
```

The output is:
```
    mySymbol
    true
    mySymbol
```
From the preceding code, you can see that in order to create or retrieve a property key using symbols, you need to use the `[]` token.
And you can also observe the block-scoped code which is enclosed inside of `{}`.

## The Object.getOwnPropertySymbols() method

The *Object.getOwnPropertyNames()* method cannot retrieve the symbol properties. Therefore, ES6 introduced `Object.getOwnPropertySymbols()` to retrieve an array of symbol properties of an object. Here is an example to demonstrate this:
```
    let obj = {a: 12};
    let s1 = Symbol("mySymbol1");
    let s2 = Symbol("mySymbol2");

    Object.defineProperty(obj, s1, {enumerable: false});

    obj[s2] = "";

    console.log(Object.getOwnPropertySymbols(obj));
```
The output is as follows:
```
    Symbol(mySymbol1),Symbol(mySymbol2)
```
From the previous example, you can see that the Object.getOwnPropertySymbols() method can also retrieve the **non-enumerable symbol properties**.

> **Note :** The `in` operator can find the symbol properties in an object, whereas the for…in loop and Object.getOwnPropertyNames() cannot find the symbol properties in an object for the sake of backward compatibility.[ex of `in` console.log(s1 in obj)]

## The Symbol.for(string) method

The Symbol object maintains a registry of the key/value pairs, where the key is the symbol description, and the value is the symbol. Whenever we create a symbol using the Symbol.for() method, it gets added to the registry and the method returns the symbol. If we try to create a symbol with a description that already exists, then the existing symbol will be retrieved.

The advantage of using the Symbol.for() method instead of the Symbol() method to create symbols is that while using the Symbol.for() method, you don't have to worry about making the symbol available **globally**, because its always available globally. Here is an example to demonstrate this:
```
    let obj = {};

    {
        let s1 = Symbol("name");
        obj[s1] = "Eden";
    }
    // obj[s1] cannot be accessed Here
    {
        let s2 = Symbol.for("age");
        obj[s2] = 27;
    }

    console.log(obj[Symbol.for("age")]); // output 27
```

## The "new" operator [Doesn't work with Symbol]

You **cannot apply** the new operator on the Symbol() function. The Symbol() function detects if it's being used as an constructor, and if true, it then throws an exception. Here is an example to demonstrate this:
```
    try{
        let s = new Symbol();
    }catch(e){
        console.error(e.message); //output Symbol is not a constructor
    }
```
But the JavaScript engine can internally use the Symbol() function as an constructor to wrap a symbol in an object. Therefore, "s" will be equal to Object(s).

> ** Note : ** All the primitive types that are introduced from ES6 onwards will not allow their constructors to be invoked manually.
