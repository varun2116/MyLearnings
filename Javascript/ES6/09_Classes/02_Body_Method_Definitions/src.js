//prototype methods
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printProfile() {
        console.log(this.name, this.age);
    }
}

let p = new Person("John", 12)
p.printProfile();

console.log("printProfile" in p.__proto__);
console.log("printProfile" in Person.prototype);

//using function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.printProfile = function() {
    console.log(this.name, this.age);
}

var p = new Person("John", 12)
p.printProfile();

console.log("printProfile" in p.__proto__);
console.log("printProfile" in Person.prototype);

//GETTER/SETTER
class Person {
    constructor(name) {
        this._name_ = name;
    }

    get name(){
        return this._name_;
    }

    set name(name){
        this._name_ = name;
    }
}

var pr = new Person("Jason");
console.log(pr.name);
pr.name = "Bourne";
console.log(pr.name);

console.log("name" in pr.__proto__);
console.log("name" in Person.prototype);
console.log(Object.getOwnPropertyDescriptor(pr.__proto__, "name").set);
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "name").get);
console.log(Object.getOwnPropertyDescriptor(pr, "_name_").value);

//Generator method
class GenClass {
    *generator_function(){
        yield 1;
        yield 3;
        yield 5;
    }
}

let obj = new GenClass();

let generator  = obj.generator_function();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);

console.log("generator_function" in GenClass.prototype);

//STATIC METHODS
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        let dx = a.x - b.x;
        let dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

//static using Functions
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.distance = function(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;

    return Math.hypot(dx, dy);
}

var p1 = new Point(5, 5);
var p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

//BOXING WITH PROTOTYPE AND STATIC METHODS
class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

let obj = new Animal();
obj.speak(); // Animal {}
let speak = obj.speak;
speak(); // undefined

Animal.eat(); //class Animal { }
let eat = Animal.eat;
eat(); // undefined

//using function
function Animal() { }

Animal.prototype.speak = function(){
    return this;
}

Animal.eat = function() {
    return this;
}

let obj = new Animal();
obj.speak(); // Animal {}
let speak = obj.speak;
speak(); // global object

Animal.eat(); //f Animal() { }
let eat = Animal.eat;
eat(); // global object

//Instance properties
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;

//THE COMPUTED METHOD NAMES
class ClassName {
    static ["my"+"Method"]() {
        console.log("Hello");
    }
}

ClassName["my"+"Method"]();

//using symbols
let sym = Symbol();
class ClassName {
    static [sym]() {
        console.log("Hello");
    }
}

ClassName[sym]();
