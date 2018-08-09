function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for (var i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function clear() {
    for (var i = 0; i < this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; i++) {
        retstr += this.dataStore[i] + " ";
        if(i > 0 && i % 10 == 0){
            retstr += "<br />";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function quicksort(arr) {
    if(arr.length == 0){
        return [];
    }
    var left = [],
        right = [],
        pivot = arr[0];

    for (var i = 1; i < arr.length; i++) {
        print("pivot: " + pivot + " current element: " + arr[i] + "<br />");
        if (arr[i] < pivot) {
            print("moving " + arr[i] + " to the left" + "<br />");
            left.push(arr[i])
        }
        else{
            print("moving " + arr[i] + " to the right" + "<br />");
            right.push(arr[i])
        }
    }
    return quicksort(left).concat(pivot, quicksort(right));
}

var a = [];
for (var i = 0; i < 10; ++i) {
   a[i] = Math.floor((Math.random()*100)+1);
}
print(a);
print("<br />");
print(quicksort(a));
