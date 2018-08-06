function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    /*this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;*/
    this.show = show;
}

function add(data) {
    if(this.dataStore.indexOf(data) < 0){
        this.dataStore.push(data);
        return true;
    }
    else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);

    if(pos > -1){
        this.dataStore.splice(pos,1);
        return true;
    }
    else {
        return false;
    }
}

function show() {
    return this.dataStore;
}

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
   print("Mike added")
}
else {
   print("Can't add Mike, must already be in set");
}
print(names.show());
var removed = "Mike";
if (names.remove(removed)) {
   print(removed + " removed.");
}
else {
   print(removed + " not removed.");
}
names.add("Clayton");
print(names.show());
if (names.remove("Mike")) {
   print(" Mike removed.");
}
else {
   print(" Mike not removed.");
}
