function print(data) {
    console.log(data);
    $(".result").append("<br />"+data);
}

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.clear = clear;
    this.length = length;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var retStr = "", i =0;
    while (i < this.dataStore.length) {
        retStr += this.dataStore[i] + "\n";
        i++;
    }
    return retStr;
}

function empty() {
    if(this.dataStore.length === 0){
        return true;
    }
    return false;
}

function clear() {
    this.dataStore = [];
}

function length() {
    return this.dataStore.length;
}
