//Es5
var obj = {"name": "John", "age": "30"};

var name = obj.name;
var age = obj.age;

//ES6
let obj = {"name": "John", "age": "30"};

let {name, age} = obj;

//ES6 assign to different variable names
let obj = {"name": "John", "age": "30", "status":"unknown"};

let {name:EmpName, age:EmpAge, status:EmpStatus} = obj;
console.log(EmpName, EmpAge);

//ES6 Default VALUES
let {a, b, c=3} = {a:"1", b:"2"};
console.log(c);

//ES6 DESTRUCTURING COMPUTED PROPERTY NAMES
let {["first"+"Name"]: x} = { firstName: "Eden" };
console.log(x);

//ES6 Nested OBJECTS
var {name, otherInfo: {age}} = {name: "Eden", otherInfo: {age: 23}};
console.log(name, age);

//Es6 function parameter
function functionName({name = 'Eden', age = 23, prof = "Desk"} = {}) {
    console.log(name, age, prof); // output John 30 Desk
}

functionName({name: "John", age: "30"});
