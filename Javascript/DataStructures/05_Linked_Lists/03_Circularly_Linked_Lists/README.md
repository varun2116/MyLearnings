## Circularly Linked Lists

A circularly linked list is similar to a singly linked list and has the same type of nodes. The only difference is that a circularly linked list, when created, has its head node’s next property point back to itself. This means that the assignment:
```
    head.next = head
```

is propagated throughout the circularly linked list so that every new node has its *next* property pointing to the head of the list. In other words, the last node of the list is always pointing back to the head of the list, creating a circular list,

![A circularly linked list](img/CLinkedList.png)

The reason you might want to create a circularly linked list is if you want the ability to go backward through a list but don’t want the extra overhead of creating a doubly linked list. You can move backward through a circularly linked list by moving forward through the end of the list to the node you are trying to reach.

To create a circularly linked list, change the constructor function of the CLinkedList class to read:
```
    function CLinkedList() {
        this.head = new Node("head");
        this.head.next = this.head;
        this.find = find;
        this.insert = insert;
        this.remove = remove;
        this.display = display;
        this.findPrevious = findPrevious;
    }
```

This is the only change we have to make in order to make a singly linked list into a circularly linked list. However, some of the other linked list functions will not work correctly unmodified. For example, one function that needs to be modified is **display()**. As written, if the display() function is executed on a circularly linked list, the function will never stop. The condition of the while loop needs to change so that the head element is tested for and the loop will stop when it gets to the head.

Here is how the display() function is written for a circularly linked list:
```
    function display() {
        var currNode = this.head;
        while (currNode.next != null && currNode.next.element != "head") {
            print(currNode.next.element);
            currNode = currNode.next;
        }
    }
```
Seeing how to modify the display() function, you should be able to modify other functions from a standard linked list to make them work with a circularly linked list.
