# Sets

A *set* is a collection of unique elements. The elements of a set are called *members*. The two most important properties of sets are that the members of a set are unordered and that no member can occur in a set more than once. Sets play a very important role in computer science but are not considered a data type in many programming languages. Sets can be useful when you want to create a data structure that consists only of unique elements, such as a list of each unique word in a text.

## Fundamental Set Definitions, Operations, and Properties

A set is an unordered collection of related members in which no member occurs more than once. A set is denoted mathematically as a list of members surrounded by curly braces, such as {0,1,2,3,4,5,6,7,8,9}. We can write a set in any order, so the previous set can be written as {9,0,8,1,7,2,6,3,5,4} or any other combination of the members such that all the members are written just once.

## SET DEFINITIONS

Here are some definitions you need to know to work with sets:

* A set containing no members is called the *empty set*. The *universe* is the set of all possible members.
* Two sets are considered equal if they contain exactly the same members.
* A set is considered a *subset* of another set if all the members of the first set are contained in the second set.

## SET OPERATIONS

The fundamental operations performed on sets are:

> **Union**: A new set is obtained by combining the members of one set with the members of another set.
> **Intersection**: A new set is obtained by adding all the members of one set that also exist in a second set.
> **Difference**:A new set is obtained by adding all the members of one set except those that also exist in a second set.

* [The Set Class Implementation](01_Set_Class)
