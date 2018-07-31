function read(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    var resp = "";
    rawFile.onreadystatechange = function ()
    {
       if(rawFile.readyState === 4)
       {
           if(rawFile.status === 200 || rawFile.status == 0)
           {
               var allText = rawFile.responseText;
               resp = allText;
           }
       }
    }
    rawFile.send();
    return resp;
}

var names = `F Allison McMillan
M Frank Opitz
M Mason McMillan
M Clayton Ruff
F Cheryl Ferenback
M Raymond Williams
F Jennifer Ingram
M Bryan Frazer
M David Durr
M Danny Martin
F Aurora Adney`;

function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

function getDancers(males, females) {
    //var names = read("dancers.txt");
    names = names.split("\n");
    for (var i = 0; i < names.length; i++) {
      names[i] = names[i].trim();
      var dancer = names[i].split(" ");
        var sex = dancer[0],
            name = dancer[1];
        if(sex === "F"){
            females.enqueue(new Dancer(name, sex));
        }
        else{
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance(males, females) {
    print("The dance partners are: \n");
    while(!females.empty() && !males.empty()){
        print("Female Dancer is : " + females.dequeue().name
        + " and male Dancer is : " + males.dequeue().name);
    }
    print("\n");
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
   print(femaleDancers.front().name + " is waiting to dance.");
}
if (!maleDancers.empty()) {
   print(maleDancers.front().name + " is waiting to dance.");
}
if (maleDancers.length() > 0) {
   print("There are " + maleDancers.length() +
         " male dancers waiting to dance.");
}
if (femaleDancers.length() > 0) {
   print("There are " + femaleDancers.length() +
         " female dancers waiting to dance.");
}
