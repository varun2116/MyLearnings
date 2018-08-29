//class definition
class Student {
    constructor(name) {
        this.name = name;
    }
}

var obj = new Student("John")
console.log(obj.name);

//class definition with function
function Student(name) {
    this.name = name;
}

var obj = new Student("John");
console.log(obj.name);

//prove that a class is a function
class Student {
  constructor(name) {
      this.name = name;
  }
}

function School(name) {
    this.name = name;
}

console.log(typeof Student);
console.log(typeof School === typeof Student);

//class expression
//unnamed
let Rectangle = class {
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
};

console.log(Rectangle.name);

//named
let Rectangle = class Rectangle2 {
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
};

console.log(Rectangle.name);

//function expression
//unnamed
var Rectangle = function(height,width) {
    this.height = height;
    this.width = width;
}

console.log(Rectangle.name);

//named
var Rectangle = function Rectangle2(height,width) {
    this.height = height;
    this.width = width;
}

console.log(Rectangle.name);

//Overriding the result of the constructor method
class ClassName {
    constructor() {
        return Object.create(null);
    }
}

console.log(new ClassName() instanceof ClassName);
