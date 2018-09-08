# Classes

JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. Classes do not introduce a new object-oriented model to JavaScript. The classes are just new a syntax for the existing model.

The ES6 classes aim to provide a much simpler and clearer syntax for dealing with the constructors and inheritance.

In fact, classes are functions. Classes are just a new syntax for creating functions that are used as constructors. Creating functions using the classes that aren't used as constructors doesn't make any sense, and offer no benefits. Rather, it makes your code difficult to read, as it becomes confusing. Therefore, use classes only if you want to use it for constructing objects.

1. [Defining classes](01_Defining_classes)
2. [Class Body and Method Definitions](02_Body_Method_Definitions)
3. [Inheritance](03_Inheritance)
4. [Species](04_Misc#Species)
5. [Mix-ins](04_Misc#Mix-ins)
6. [new.target](04_Misc)
