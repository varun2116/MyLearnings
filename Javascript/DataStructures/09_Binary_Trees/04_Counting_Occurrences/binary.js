function Node(data, left, right) {
    this.data = data;
    this.count = 1;
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
    this.remove = remove;
    this.removeNode = removeNode;
    this.update = update;
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

function remove(data) {
    if(this.find(data) != null){
        root = this.removeNode(this.root, data);
        return true;
    }
    return false;
}

function removeNode(node, data) {
    if(node == null){
        return null;
    }
    if(data == node.data){
        //node has no children
        if(node.left == null && node.right == null){
            return null;
        }

        //node has no left children
        if(node.left == null){
            return node.right;
        }

        //node has no right children
        if (node.right == null) {
            return node.left;
        }

        //node has two children
        var tempNode = this.getMin(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    }
    else {
        node.right = this.removeNode(node.right, data);
        return node;
    }
}

function update(data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
}

//Other functions
function prArray(arr) {
    print(arr[0].toString() + ' ');
    for (var i = 1; i < arr.length; i++) {
        print(arr[i].toString() + ' ');
        if (i % 10 == 0) {
            print("<br />");
        }
    }
}

function genArray(length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}

//Test Program
function CountOccur(grade) {
    var aGrade = gradedistro.find(grade);
    if (aGrade == null) {
        print("<br />No occurrences of " + grade + "<br />");
    }
    else {
        print("<br />Occurrences of " + grade + ": " + aGrade.count + "<br />");
    }
}
var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for (var i = 0; i < grades.length; ++i) {
    var g = grades[i];
    var grade = gradedistro.find(g);
    if (grade == null) {
      gradedistro.insert(g);
    }
    else {
      gradedistro.update(g);
    }
}

CountOccur(23);
CountOccur(65);
