function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

function simpleHash(data) {
    var total = 0;
    for (var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    //print("Hash Value: " + data + " -> " + total);
    return total % this.table.length;
}

function put(key, data) {
    var pos = this.betterHash(key);
    this.table[pos] = data;
}

function showDistro() {
    for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
            print(i + " : " + this.table[i]);
        }
    }
}

function betterHash(data) {
    var H = 31, total = 0;
    for (var i = 0; i < data.length; i++) {
        total += H * total + data.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total < 0){
        total += this.table.length - 1;
    }
    return parseInt(total);
}

function get(key) {
    return this.table[this.betterHash(key)];
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = "";
        for (var j = 1; j <= 9; ++j) {
           num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var someNumbers = ["1234", "5678", "1000", "4355", "2394", "5384", "9348", "3945", "3934", "3289"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
   hTable.put(someNames[i], someNumbers[i]);
}
hTable.showDistro();
print("David :" + hTable.get("David"));
