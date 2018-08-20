## Behavioral Patterns

Behavioral patterns are patterns that focus on interaction between objects. Where creational patterns describe a moment of time and structural patterns describe a more or less static structure, behavioral patterns describe a process or a flow.

These design patterns are all about Class's objects communication. Behavioral patterns are those patterns that are most specifically concerned with communication between objects.

Some of the patterns that fall under this category are:

    1. [Chain of Resp.]() : A way of passing a request between a chain of objects. Avoid coupling the sender of a request to its receiver by giving more than one object a  chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

    2. [Command](): Encapsulate a command request as an object. Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

    3. [Interpreter](): A way to include language elements in a program. Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

    4. [Iterator](): Sequentially access the elements of a collection. Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

    5. [Mediator](): Defines simplified communication between classes. Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.

    6. [Memento](): Capture and restore an object's internal state. Without violating encapsulation, capture and externalize an object’s internal state so that the object can be restored to this state later.

    7. [Observer](): A way of notifying change to a number of classes. Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

    8. [State](): Alter an object's behavior when its state changes. Allow an object to alter its behavior when its internal state changes. The object will appear to change its class.

    9. [Strategy](): Encapsulates an algorithm inside a class. Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

    10. [Template](): Defer the exact steps of an algorithm to a subclass. Define the skeleton of an algorithm in an operation, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.

    11. [Visitor](): Defines a new operation to a class without change. Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.
