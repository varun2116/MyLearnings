# Design Patterns

## What Is a Pattern?

A **pattern** is a reusable solution that can be applied to commonly occurring problems in software design—in our case, in writing JavaScript web applications. Another way of looking at patterns is as templates for how we solve problems—ones that can be used in quite a few different situations.

Design patterns have three main benefits:

1. Patterns are proven solutions.
> They provide solid approaches to solving issues in software development using proven techniques that reflect the experience and insights the developers that helped define them bring to the pattern.

2. Patterns can be easily reused.
> A pattern usually reflects an out-of-the-box solution that can be adapted to suit our own needs. This feature makes them quite robust.

3. Patterns can be expressive.
> When we look at a pattern, there’s generally a set structure and *vocabulary* to the solution presented that can help express rather large solutions quite elegantly.

> **Note:** Patterns are not exact solutions. It’s important that we remember the role of a pattern is merely to provide us with a solution scheme. Patterns don’t solve all design problems, nor do they replace good software designers, however, they do support them.

## The Structure of a Design Pattern

You may be curious about how a pattern author might approach outlining a structure, implementation, and purpose of a new pattern. A pattern is initially presented in the form of a *rule* that establishes a relationship between:

* A context

* A system of forces that arises in that context

* A configuration that allows these forces to resolve themselves in context

With this in mind, lets now take a look at a summary of the component elements for a design pattern. A design pattern should have the following:

* Pattern name

* Description

* Context outline

      The contexts in which the pattern is effective in responding to users’ needs.

* Problem statement
      A statement of the problem being addressed so we can understand the intent of the pattern.

* Solution
      A description of how the user’s problem is being solved in an understandable list of steps and perceptions.

* Design
      A description of the pattern’s design and, in particular, the user’s behavior in interacting with it.

* Implementation
      A guide to how the pattern would be implemented.

* Illustrations
      Visual representations of classes in the pattern (e.g., a diagram).

* Examples
      Implementations of the pattern in a minimal form.

* Corequisites
      What other patterns may be needed to support use of the pattern being described?

* Relations
      What patterns does this pattern resemble? Does it closely mimic any others?

* Known usage
      Is the pattern being used in the wild? If so, where and how?

* Discussions
      The team or author’s thoughts on the exciting benefits of the pattern.


## Anti-Patterns

If we consider that a pattern represents a best practice, an **anti-pattern** represents a lesson that has been learned. The term anti-patterns was coined in 1995 by Andrew Koenig in the November C++ Report that year, inspired by the Gang of Four GoF’s book Design Patterns. In Koenig’s report, there are two notions of anti-patterns that are presented. Anti-patterns:

* Describe a *bad* solution to a particular problem that resulted in a bad situation occurring

* Describe *how* to get out of said situation and how to go from there to a good solution

On this topic, Alexander writes about the difficulties in achieving a good balance between good design structure and good context:

>  ***These notes are about the process of design; the process of inventing physical things which display a new physical order, organization, form, in response to function.…every design problem begins with an effort to achieve fitness between two entities: the form in question and its context. The form is the solution to the problem; the context defines the problem.***

To summarize, an anti-pattern is a bad design that is worthy of documenting. Examples of anti-patterns in JavaScript are the following:

* Polluting the global namespace by defining a large number of variables in the global context.

* Passing strings rather than functions to either setTimeout or setInterval, as this triggers the use of eval() internally.

* Modifying the Object class prototype (this is a particularly bad anti-pattern).

* Using JavaScript in an inline form as this is inflexible.


## Categories of Design Patterns

A glossary from the well-known design book, ***Domain-Driven Terms***, rightly states that:

>***A design pattern names, abstracts, and identifies the key aspects of a common design structure that make it useful for creating a reusable object-oriented design. The design pattern identifies the participating classes and their instances, their roles and collaborations, and the distribution of responsibilities.***

> ***Each design pattern focuses on a particular object-oriented design problem or issue. It describes when it applies, whether or not it can be applied in view of other design constraints, and the consequences and trade-offs of its use. Since we must eventually implement our designs, a design pattern also provides sample ... code to illustrate an implementation.***

> ***Although design patterns describe object-oriented designs, they are based on practical solutions that have been implemented in mainstream object-oriented programming languages ....***

The 23 GoF patterns are generally considered the foundation for all other patterns. They are categorized in three groups: *Creational*, *Structural*, and *Behavioral*.

| Name                          | Description  |
|--------------------           | :----------- |
| ***[Creational Patterns]()*** |              |
| [Abstract Factory]()          |	Creates an instance of several families of classes |
| [Builder]()	                  | Separates object construction from its representation |
| [Factory Method]()	          | Creates an instance of several derived classes |
| [Prototype]()	                | A fully initialized instance to be copied or cloned |
| [Singleton]()	                | A class of which only a single instance can exist |
| ***[Structural Patterns]()*** |               |
| [Adapter]()                   |	Match interfaces of different classes |
| [Bridge]()	                  | Separates an object’s interface from its implementation |
| [Composite]()	                | A tree structure of simple and composite objects |
| [Decorator]()	                | Add responsibilities to objects dynamically |
| [Facade]()	                  | A single class that represents an entire subsystem |
| [Flyweight]()	                | A fine-grained instance used for efficient sharing |
| [Proxy]()	                    | An object representing another object |
| ***[Behavioral Patterns]()*** |                 |
| [Chain of Resp.]()	          | A way of passing a request between a chain of objects |
| [Command]()	                  | Encapsulate a command request as an object |
| [Interpreter]()	              | A way to include language elements in a program |
| [Iterator]()	                | Sequentially access the elements of a collection |
| [Mediator]()	                | Defines simplified communication between classes |
| [Memento]()	                  | Capture and restore an object's internal state |
| [Observer]()	                | A way of notifying change to a number of classes |
| [State]()	                    | Alter an object's behavior when its state changes |
| [Strategy]()	                | Encapsulates an algorithm inside a class |
| [Template]()                  | Method	Defer the exact steps of an algorithm to a subclass |
| [Visitor]()	                  | Defines a new operation to a class without change |

> **"One of the most important aspects of writing maintainable code is being able to notice the recurring themes in that code and optimize them. This is an area where knowledge of design patterns can prove invaluable."** - Addy Osmani
