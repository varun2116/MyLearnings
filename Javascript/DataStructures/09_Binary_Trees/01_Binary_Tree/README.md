## Binary Trees and Binary Search Trees

As mentioned earlier, a *binary tree* is one where each node can have no more than two children. By limiting the number of children to two, we can write efficient programs for inserting data, searching for data, and deleting data in a tree.

Before we discuss building a binary tree in JavaScript, we need to add two terms to our tree lexicon. The child nodes of a parent node are referred to as the *left node* and the *right node*. For certain binary tree implementations, certain data values can be stored only in left nodes, and other data values must be stored in right nodes. An example binary tree is shown in figure below

![A binary tree](../img/binarytree.png)

Identifying the child nodes is important when we consider a more specific type of binary tree, the *binary search tree*. A binary search tree is a binary tree in which data with lesser values are stored in left nodes and data with greater values are stored in right nodes. This property provides for very efficient searches and holds for both numeric data and non-numeric data, such as words and strings.

### BUILDING A BINARY SEARCH TREE IMPLEMENTATION
