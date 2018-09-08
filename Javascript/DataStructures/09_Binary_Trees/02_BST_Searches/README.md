## BST Searches

There are three types of searches typically performed with a BST:

1. Searching for a specific value
2. Searching for the minimum value
3. Searching for the maximum value

### SEARCHING FOR THE MINIMUM AND MAXIMUM VALUE

Searches in a BST for the *minimum* and *maximum* values stored are relatively simple procedures. Since lower values are always stored in left child nodes, to find the minimum value in a BST, you only have to traverse the left edge of the BST until you get to the last node.

Here is the definition of a function, **getMin()**, that finds the minimum value of a BST:
```
    function getMin() {
        var current = this.root;
        while(current.left != null){
            current = current.left;
        }
        return current.data;
    }
```
The function travels down the left link of each node in the BST until it reaches the left end of the BST, which is defined as:
```
    current.left == null;
```
When this point is reached, the data stored in the current node must be the *minimum value*.

To find the maximum value stored in a BST, the function must simply traverse the right links of nodes until the function reaches the right end of the BST. The value stored in this node must be the maximum value.

The definition for the **getMax()** function is below:
```
    function getMax() {
        var current = this.root;
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }
```

Test program tests the getMin() and getMax() functions with the BST data we used earlier.
```
    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);
    var min = nums.getMin();
    print("The minimum value of the BST is: " + min);
    print("<br />");
    var max = nums.getMax();
    print("The maximum value of the BST is: " + max);
```
The output from this program is:
```
    The minimum value of the BST is: 3
    The maximum value of the BST is: 99
```
These functions return the data stored in the minimum and maximum positions, respectively. Instead, we may want the functions to return the nodes where the minimum and maximum values are stored. To make that change, just have the functions return the current node rather than the value stored in the current node.

### SEARCHING FOR A SPECIFIC VALUE

Searching for a specific value in a BST requires that a comparison be made between the data stored in the current node and the value being searched for. The comparison will determine if the search travels to the left child node, or to the right child node if the current node doesn’t store the searched-for value.

We can implement searching in a BST with the **find()** function, which is defined here:
```
    function find(data) {
        var current = this.root;
        while (current != null && current.data != data) {
            if(data < current.data){
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return current;
    }
```
This function returns the current node if the value is found in the BST and returns null if the value is not found.

Add the below lines to the earlier test program:
```
    inOrder(nums.root);
    var val = 23;
    var found = nums.find(value);
    if (found != null) {
       print("Found " + val + " in the BST.<br />");
    }
    else {
       print(val + " was not found in the BST.<br />");
    }
    var val = 100;
    var found = nums.find(val);
    if (found != null) {
       print("Found " + val + " in the BST.<br />");
    }
    else {
       print(val + " was not found in the BST.<br />");
    }
```
The output is:
```
    The minimum value of the BST is: 3
    The maximum value of the BST is: 99
    Found 23 in the BST.
    100 was not found in the BST.
```
