## An Object-Based Linked List Design

Our design of a linked list will involve creating two classes. We’ll create a Node class for adding nodes to a linked list, and we’ll create a **LinkedList class**, which will provide functions for inserting nodes, removing nodes, displaying a list, and other housekeeping functions.

### THE NODE CLASS

The Node class consists of two properties:
    element, which store’s the node’s data,
    and next, which stores a link to the next node in the linked list.

To create nodes, we’ll use a constructor function that sets the values for the two properties:
```
    function Node(element) {
        this.element = element;
        this.next = null;
    }
```

### THE LINKED LIST CLASS

The LinkedList class provides the functionality for a linked list. The class includes functions for inserting new nodes, removing nodes, and finding a particular data value in a list. There is also a constructor function used for creating a new linked list. The only property stored in a linked list is a node to represent the head of the list.

Here is the definition for the constructor function:
```
    function LinkedList() {
        this.head = new Node("head");
        this.find = find;
        this.insert = insert;
        this.remove = remove;
        this.display = display;
    }
```
The *head node* starts with its next property set to null and is changed to point to the first element inserted into the list, since we create a new Node element but don’t modify its next property here in the constructor.

### INSERTING NEW NODES

The first function we’ll examine is the insert function, which inserts a node into a list. To insert a new node, you have to specify which node you want to insert the new node before or after. We’ll start by demonstrating how to insert a new node after an existing node.

To insert a node after an existing node, we first have to find the “after” node. To do this, we create a helper function, *find()*, which searches through the linked list looking for the specified data. When this data is found, the function returns the node storing the data. Here is the code for the **find()** function:
```
    function find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
```
The **find()** function demonstrates how to move through a linked list. First, we create a new node and assign it as the head node. Then we loop through the linked list, moving from one node to the next when the value of the current node’s element property is not equal to the data we are searching for. If the search is successful, the function returns the node storing the data. If the data is not found, the function returns null.

Once the “after” node is found, the new node is inserted into the linked list. First, the new node’s next property is set to the value of the next property of the “after” node. Then the “after” node’s next property is set to a reference to the new node. Here is the definition of the **insert()** function:
```
    function insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
```

We’re ready now to test our linked list code. However, before we do that, we need a function that will display the elements of a linked list. The **display()** function is defined below:
```
    function display() {
        var currNode = this.head;
        while (currNode.next != null) {
            print(currNode.next.element);
            currNode = currNode.next;
        }
    }
```
This function starts by hooking into the linked list by assigning the head of the list to a new node. We then loop through the linked list, only stopping when the value of the current node’s next property is set to null. In order to display only nodes with data in them (in other words, not the head node), we access the element property of the node that the current node is pointing to:
```
    currNode.next.element
```

Finally, we need to add some code to use the linked list. Below a short program that sets up a linked list of cities in western Arkansas that are located on Interstate 40.
```
    var cities = new LinkedList();
    cities.insert("Conway", "head");
    cities.insert("Russellville", "Conway");
    cities.insert("Alma", "Russellville");
    cities.display();
```
The output is:
```
    Conway
    Russellville
    Alma
```

### REMOVING NODES FROM A LINKED LIST

In order to remove a node from a linked list, we need to find the node that is just before the node we want to remove. Once we find that node, we change its next property to no longer reference the removed node, and the previous node is modified to point to the node after the removed node. We can define a function, *findPrevious()*, to perform this task. This function traverses the linked list, stopping at each node to see if the next node stores the data that is to be removed. When the data is found, the function returns this node (the “previous” node), so that its next property can be modified. Here is the definition for **findPrevious()**:
```
    function findPrevious(item) {
        var currNode = this.head;
        while (currNode.next != null && currNode.next.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
```
Now we’re ready to write the **remove()** function:
```
    function remove(item) {
        var prevNode = findPrevious(item);
        if(prevNode.next != null){
            prevNode.next = prevNode.next.next;
        }
    }
```
The main line of code in this function looks odd, but makes perfect sense:
```
    prevNode.next = prevNode.next.next;
```
We are just skipping over the node we want to remove and linking the “previous” node with the node just after the one we are removing.

We are ready to test our code again, but first we need to modify the constructor function for the LinkedList class to include these new functions:
```
    function LinkedList() {
        this.head = new Node("head");
        this.find = find;
        this.insert = insert;
        this.remove = remove;
        this.display = display;
        this.findPrevious = findPrevious;
    }
```
A short program that tests the remove() function:
```
    var cities = new LinkedList();
    cities.insert("Conway", "head");
    cities.insert("Russellville", "Conway");
    cities.insert("Carlisle", "Russellville");
    cities.insert("Alma", "Carlisle");
    cities.display();
    cities.remove("Carlisle");
    cities.display();
```
The output is:
```
    Conway
    Russellville
    Carlisle
    Alma
    Conway
    Russellville
    Alma
```
