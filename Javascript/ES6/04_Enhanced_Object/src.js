//ES5 property
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
}

console.log(obj.x);

//ES6 property
let x = 1, y = 2;

let obj = {x, y};

console.log(obj.x);

//Es5 methods
var obj = {
  sum: function sum(a, b) {
    return a + b;
  }
}

console.log(obj.sum(1,2)); //output 3

//Es6 methods
let obj = {
  sum(a,b){
    return a + b;
  }
}

console.log(obj.sum(1,2)); //output 3

//Es5 computed property names
var obj = {};

obj["first"+"Name"] = "Eden"; // "firstName" is the property name

console.log(obj["first"+"Name"]);

//Es6
let obj = {
  ["first"+"Name"] : "Eden"
};

console.log(obj["first"+"Name"]);
