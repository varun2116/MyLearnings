# Design Patterns

In software engineering, a **design pattern** is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn't a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.

> **"One of the most important aspects of writing maintainable code is being able to notice the recurring themes in that code and optimize them. This is an area where knowledge of design patterns can prove invaluable."** - Addy Osmani

<hr />

## What Is a Pattern?

A **pattern** is a reusable solution that can be applied to commonly occurring problems in software design—in our case, in writing JavaScript web applications. Another way of looking at patterns is as templates for how we solve problems—ones that can be used in quite a few different situations.

Design patterns have three main benefits:

1. Patterns are proven solutions.
> They provide solid approaches to solving issues in software development using proven techniques that reflect the experience and insights the developers that helped define them bring to the pattern.

2. Patterns can be easily reused.
> A pattern usually reflects an out-of-the-box solution that can be adapted to suit our own needs. This feature makes them quite robust.

3. Patterns can be expressive.
> When we look at a pattern, there’s generally a set structure and *vocabulary* to the solution presented that can help express rather large solutions quite elegantly.

Patterns are **not** exact solutions. It’s important that we remember the role of a pattern is merely to provide us with a solution scheme. Patterns don’t solve all design problems, nor do they replace good software designers, however, they **do** support them.

Next we’ll take a look at some of the other advantages patterns have to offer.

* **Reusing patterns assists in preventing minor issues that can cause major problems in the application development process**. What this means is when code is built on proven patterns, we can afford to spend less time worrying about the structure of our code and more time focusing on the quality of our overall solution. This is because patterns can encourage us to code in a more structured and organized fashion avoiding the need to refactor it for cleanliness purposes in the future.

* **Patterns can provide generalized solutions which are documented in a fashion that doesn't require them to be tied to a specific problem**. This generalized approach means that regardless of the application (and in many cases the programming language) we are working with, design patterns can be applied to improve the structure of our code.

* **Certain patterns can actually decrease the overall file-size footprint of our code by avoiding repetition**. By encouraging developers to look more closely at their solutions for areas where instant reductions in repetition can be made, e.g. reducing the number of functions performing similar processes in favor of a single generalized function, the overall size of our codebase can be decreased. This is also known as making code more *DRY*.

* **Patterns add to a developer's vocabulary, which makes communication faster**.

* **Patterns that are frequently used can be improved over time by harnessing the collective experiences other developers using those patterns contribute back to the design pattern community**. In some cases this leads to the creation of entirely new design patterns whilst in others it can lead to the provision of improved guidelines on how specific patterns can be best used. This can ensure that pattern-based solutions continue to become more robust than ad-hoc solutions may be.

<hr />

## The Structure of a Design Pattern

You may be curious about how a pattern author might approach outlining a structure, implementation, and purpose of a new pattern. A pattern is initially presented in the form of a **rule** that establishes a relationship between:

* A **context**
* A system of **forces** that arises in that context
* A **configuration** that allows these forces to resolve themselves in context

With this in mind, lets now take a look at a summary of the component elements for a design pattern. A design pattern should have the following:

* **Pattern name** and **Description**

* **Context outline** - The contexts in which the pattern is effective in responding to users' needs.

* **Problem statement** - A statement of the problem being addressed so we can understand the intent of the pattern.

* **Solution** - A description of how the user’s problem is being solved in an understandable list of steps and perceptions.

* **Design** - A description of the pattern’s design and, in particular, the user's behavior in interacting with it.

* **Implementation** - A guide to how the pattern would be implemented.

* **Illustrations** - Visual representations of classes in the pattern (e.g., a diagram).

* **Examples** - Implementations of the pattern in a minimal form.

* **Co-requisites** - What other patterns may be needed to support use of the pattern being described?

* **Relations** - What patterns does this pattern resemble? Does it closely mimic any others?

* **Known usage** - Is the pattern being used in the wild? If so, where and how?

* **Discussions** - The team or author’s thoughts on the exciting benefits of the pattern.

<hr />

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

<hr />

## Categories of Design Patterns

A glossary from the well-known design book, ***Domain-Driven Terms***, rightly states that:

>***A design pattern names, abstracts, and identifies the key aspects of a common design structure that make it useful for creating a reusable object-oriented design. The design pattern identifies the participating classes and their instances, their roles and collaborations, and the distribution of responsibilities.***

> ***Each design pattern focuses on a particular object-oriented design problem or issue. It describes when it applies, whether or not it can be applied in view of other design constraints, and the consequences and trade-offs of its use. Since we must eventually implement our designs, a design pattern also provides sample ... code to illustrate an implementation.***

> ***Although design patterns describe object-oriented designs, they are based on practical solutions that have been implemented in mainstream object-oriented programming languages ....***

The 23 GoF patterns are generally considered the foundation for all other patterns. They are categorized in three groups: *Creational*, *Structural*, and *Behavioral*.

| ***[Creational Patterns](01_Creational_Patterns)*** | Based on the concept of creating an object.  |
|--------------------           | :----------- |
| **Class**                     |              |
| [Factory Method]()	          | Creates an instance of several derived classes |
| **Object**                    |              |
| [Abstract Factory]()          |	Creates an instance of several families of classes |
| [Builder]()	                  | Separates object construction from its representation |
| [Prototype]()	                | A fully initialized instance to be copied or cloned |
| [Singleton]()	                | A class of which only a single instance can exist |

<hr />

| ***[Structural Patterns](02_Structural_Patterns)*** | Based on the idea of building blocks of objects. |
|--------------------           | :----------- |
| **Class**                     |              |
| [Adapter]()                   |	Match interfaces of different classes |
| **Object**                    |              |
| [Adapter]()                   |	Match interfaces of different classes |
| [Bridge]()	                  | Separates an object’s interface from its implementation |
| [Composite]()	                | A tree structure of simple and composite objects |
| [Decorator]()	                | Add responsibilities to objects dynamically |
| [Facade]()	                  | A single class that represents an entire subsystem |
| [Flyweight]()	                | A fine-grained instance used for efficient sharing |
| [Proxy]()	                    | An object representing another object |

<hr />

| ***[Behavioral Patterns](03_Behavioral_Patterns)*** | Based on the way objects play and work together. |
|--------------------           | :----------- |
| **Class**                     |              |
| [Interpreter]()	              | A way to include language elements in a program |
| [Template]()                  | Method	Defer the exact steps of an algorithm to a subclass |
| **Object**                    |              |
| [Chain of Resp.]()	          | A way of passing a request between a chain of objects |
| [Command]()	                  | Encapsulate a command request as an object |
| [Iterator]()	                | Sequentially access the elements of a collection |
| [Mediator]()	                | Defines simplified communication between classes |
| [Memento]()	                  | Capture and restore an object's internal state |
| [Observer]()	                | A way of notifying change to a number of classes |
| [State]()	                    | Alter an object's behavior when its state changes |
| [Strategy]()	                | Encapsulates an algorithm inside a class |
| [Visitor]()	                  | Defines a new operation to a class without change |

<hr />

## Uses of Design Patterns

Design patterns can speed up the development process by providing tested, proven development paradigms. Effective software design requires considering issues that may not become visible until later in the implementation. Reusing design patterns helps to prevent subtle issues that can cause major problems and improves code readability for coders and architects familiar with the patterns.

Often, people only understand how to apply certain software design techniques to certain problems. These techniques are difficult to apply to a broader range of problems. Design patterns provide general solutions, documented in a format that doesn't require specifics tied to a particular problem.

In addition, patterns allow developers to communicate using well-known, well understood names for software interactions. Common design patterns can be improved over time, making them more robust than ad-hoc designs.

<hr />

## [JavaScript Design Patterns](04_JavaScript_Patterns)

Developers commonly wonder whether there is an *ideal* pattern or set of patterns they should be using in their workflow. There isn’t a true single answer to this question; each script and web application we work on is likely to have its own individual needs, and we need to think about where we feel a pattern can offer real value to an implementation.

For example, some projects may benefit from the decoupling benefits offered by the Observer pattern (which reduces how dependent parts of an application are on one another), while others may simply be too small for decoupling to be a concern at all.

That said, once we have a firm grasp of design patterns and the specific problems they are best suited to, it becomes much easier to integrate them into our application architectures.

The patterns we will be exploring in this section include:
* [Constructor Pattern](04_JavaScript_Patterns/01_Constructor_Pattern)
* [Module Pattern](04_JavaScript_Patterns/02_Module_Pattern)
* [Revealing Module Pattern](04_JavaScript_Patterns/03_Revealing_Module_Pattern)
* [Singleton Pattern](04_JavaScript_Patterns/04_Singleton_Pattern)
* [Observer Pattern](04_JavaScript_Patterns/05_Observer_Pattern)
* [Mediator Pattern](04_JavaScript_Patterns/06_Mediator_Pattern)
* [Prototype Pattern](04_JavaScript_Patterns/07_Prototype_Pattern)
* [Command Pattern](04_JavaScript_Patterns/08_Command_Pattern)
* [Facade Pattern](04_JavaScript_Patterns/09_Facade_Pattern)
* [Factory Pattern](04_JavaScript_Patterns/10_Factory_Pattern)
* [Mixin Pattern](04_JavaScript_Patterns/11_Mixin_Pattern)
* [Decorator Pattern](04_JavaScript_Patterns/12_Decorator_Pattern)
* [Flyweight Pattern](04_JavaScript_Patterns/13_Flyweight_Pattern)

## References

[Essential JavaScript Design Patterns (Addy Osmani)](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#categoriesofdesignpatterns)
