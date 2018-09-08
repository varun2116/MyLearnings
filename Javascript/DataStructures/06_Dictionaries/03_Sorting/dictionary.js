function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value) {
    this.dataStore[key] = value;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    var keys = Object.keys(this.dataStore).sort();
    for (var i = 0; i < keys.length; i++) {
        print(keys[i] + " -> " + this.dataStore[keys[i]]);
    }
}

function count() {
    var n = 0
    for (var key in this.dataStore) {
        n++;
    }
    return n;
}

function clear() {
    for (var key in this.dataStore) {
      delete this.dataStore[key];
    }
}

var pbook = new Dictionary();
pbook.add("Raymond","123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showAll();
