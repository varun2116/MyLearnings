## Counting Occurrences

One use of a BST is to keep track of the occurrences of data in a data set. For example, we can use a BST to record the distribution of grades on an exam. Given a set of exam grades, we can write a program that checks to see if the grade is in the BST, adding the grade to the BST if it is not found, and incrementing the number of occurrrences of it if the grade is found in the BST.

To solve this problem, we need to modify the Node object to include a field for keeping track of the number of occurrences of a grade in the BST, and we need a function for updating a node so that if we find a grade in the BST, we can increment the occurrences field.

Let’s start by modifying our definition of the **Node object** to include a field for keeping track of grade occurrences:
```
    function Node(data, left, right) {
        this.data = data;
        this.count = 1;
        this.left = left;
        this.right = right;
        this.show = show;
    }
```
When a grade (a Node object) is inserted into a BST, its count is set to 1.

The BST insert() function will work fine as is, but we need to add a function to update the BST when the count field needs to be incremented. We’ll call this function **update()**:
```
    function update(data) {
        var grade = this.find(data);
        grade.count++;
        return grade;
    }
```

The other functions of the BST class are fine as is. We just need a couple of functions to generate a set of grades and to display the grades:
```
    function prArray(arr) {
        for (var i = 0; i < arr.length; i++) {
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
```

A program for testing out this new code for counting occurrences of grades.
```
    function CountOccur(grade) {
        var aGrade = gradedistro.find(grade);
        if (aGrade == null) {
            print("No occurrences of " + grade);
        }
        else {
            print("Occurrences of " + grade + ": " + aGrade.count);
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
```
Here is the output from one run of the program:
```
    53 78 44 92 67 12 13 96 52 34 71
    61 32 34 62 77 52 68 41 18 88
    50 7 95 12 74 92 78 22 21 35
    78 54 60 58 69 26 14 39 73 93
    37 38 73 68 1 38 38 13 14 64
    54 100 77 59 41 67 84 65 3 56
    78 21 41 23 38 78 74 60 100 99
    23 77 46 44 83 15 2 82 35 59
    9 44 83 30 56 24 30 67 32 37
    73 89 20 60 98 85 83 47 66
    Occurrences of 23: 2

    Occurrences of 65: 1
```
