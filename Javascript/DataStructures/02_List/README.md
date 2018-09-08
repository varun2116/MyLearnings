# Lists

Our computer programs can use lists, particularly if we only have a few items to store in list form. Lists are especially useful if we don’t have to perform searches on the items in the list or put them into some type of sorted order. When we need to perform long searches or complex sorts, lists become less useful, especially with more complex data structures.

We start with the definition of a list abstract data type (ADT) and then demonstrate how to implement the ADT.

## A List abstract data type ADT

In order to design an ADT for a list, we have to provide a definition of the list, including its properties, as well as the operations performed on it and by it.

A list is an ordered sequence of data. Each data item stored in a list is called an *element*. In JavaScript, the elements of a list can be of any data type. There is no predetermined number of elements that can be stored in a list, though the practical limit will be the amount of memory available to the program using the list.

A list with no elements is an *empty list*. The number of elements stored in a list is called the *length* of the list. Internally, the number of elements in a list is kept in a **listSize** variable. You can *append* an element to the end of a list, or you can insert an element into a list after an existing element or at the beginning of a list. Elements are deleted from a list using a *remove* operation. You can also clear a list so that all of its current elements are removed.

The elements of a list are displayed using either a **toString()** operation, which displays all the elements, or with a **getElement()** operation, which displays the value of the *current* element.

Lists have properties to describe location. There is the *front* of a list and the *end* of a list. You can move from one element of a list to the next element using the **next()** operation, and you can move backward through a list using the **prev()** operation. You can also move to a numbered position in a list using the **moveTo(n)** operation, where *n* specifies the position to move to. The **currPos** property indicates the current position in a list.

The List ADT does not specify a storage function for a list, but for our implementation will use an array named **dataStore**.

|**Property / Function**| **Description or usage**                         |
|-----------------------|--------------------------------------------------|
| listSize (property)   | Number of elements in list                       |
| pos (property)        | Current position in list                         |
| length (property)     | Returns the number of elements in list           |
| clear (function)      | Clears all elements from list                    |
| toString (function)   | Returns string representation of list            |
| getElement (function) | Returns element at current position              |
| insert (function)     | Inserts new element after existing element       |
| append (function)     | Adds new element to end of list                  |
| remove (function)     | Removes element from list                        |
| front (function)      | Sets current position to first element of list   |
| end (function)        | Sets current position to last element of list    |
| prev (function)       | Moves current position back one element          |
| next (function)       | Moves current position forward one element       |
| currPos (function)    | Returns the current position in list             |
| moveTo (function)     | Moves the current position to specified position |

* [List Class Implementation](01_List_Class_Implementation)
* [Iterating Through a List](02_Iterating_Through_List)

[A List-Based Application](https://www.safaribooksonline.com/library/view/data-structures-and/9781449373931/ch03.html) to build a system that can be used in the simulation of a video-rental kiosk system such as Redbox.
