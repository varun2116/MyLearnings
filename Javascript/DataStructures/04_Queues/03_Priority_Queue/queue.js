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

// function dequeue() {
//     return this.dataStore.shift();
// }

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

// function toString() {
//     var retStr = "", i =0;
//     while (i < this.dataStore.length) {
//         retStr += this.dataStore[i] + "\n";
//         i++;
//     }
//     return retStr;
// }

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

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    var priority = this.dataStore[0].code, counter = 0;
    for (var i = 1; i < this.dataStore.length; i++) {
        if(this.dataStore[i].code < priority){
            priority = this.dataStore[i].code;
            counter = i;
        }
    }
    return this.dataStore.splice(counter, 1);
}

function toString() {
    var retStr = "", i =0;
    while (i < this.dataStore.length) {
        retStr += this.dataStore[i].name + " code : "
                  + this.dataStore[i].code +"<br />";
        i++;
    }
    return retStr;
}

var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
// another round
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
var seen = ed.dequeue();
print("Patient being treated: " + seen[0].name);
print("Patients waiting to be seen: ")
print(ed.toString());
