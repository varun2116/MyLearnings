## Structural Patterns

Structural patterns provide ways to manage relationships between objects and also create class structure. One way this is achieved is by using inheritance and composition to create a large object from small objects.

These design patterns are all about Class and Object composition. Structural class-creation patterns use inheritance to compose interfaces. Structural object-patterns define ways to compose objects to obtain new functionality.

Some of the patterns that fall under this category are:

1. [Adapter](): Match interfaces of different classes.Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.

2. [Bridge](): Separates an object’s interface from its implementation. Decouple an abstraction from its implementation so that the two can vary independently.

3. [Composite](): A tree structure of simple and composite objects. Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

4. [Decorator](): Add responsibilities to objects dynamically.  Attach additional responsibilities to an object dynamically. Decorators provide a             flexible alternative to subclassing for extending functionality.

5. [Facade](): A single class that represents an entire subsystem. Provide a unified interface to a set of interfaces in a system. Facade defines a higher-level interface that makes the subsystem easier to use.

6. [Flyweight](): A fine-grained instance used for efficient sharing. Use sharing to support large numbers of fine-grained objects efficiently. A flyweight is a shared object that can be used in multiple contexts simultaneously. The flyweight acts as an independent object in each context — it’s indistinguishable from an instance of the object that’s not shared.

7. [Proxy](): An object representing another object. Provide a surrogate or placeholder for another object to control access to it.
