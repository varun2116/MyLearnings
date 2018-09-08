function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
}

function insert(data) {
    var n = new Node(data,null,null);
    if(this.root == null){
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }
            else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if(node != null){
        inOrder(node.left);
        print(node.show());
        inOrder(node.right);
    }
}

function preOrder(node) {
    if(node != null){
        print(node.show());
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if(node != null){
        postOrder(node.left);
        postOrder(node.right);
        print(node.show());
    }
}

function getMin() {
    var current = this.root;
    while(current.left != null){
        current = current.left;
    }
    return current.data;
}

function getMax() {
    var current = this.root;
    while (current.right != null) {
        current = current.right;
    }
    return current.data;
}

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

//Test Program
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
print("<br />");
var val = 23;
var found = nums.find(val);
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
