//ES5
var myArray = [1,2,3];

var a = myArray[0];
var b = myArray[1];
var c = myArray[2];

//Es6
let myArray = [1,2,3];
let a, b, c;

[a,b,c] = myArray; //array destructuring assignment syntax

//Es6 IGNORING values
let [a,,b] = [1,2,3];

console.log(a);
console.log(b);

//Es6 Using Rest OPERATOR
let [a, ...b] = [1, 2, 3, 4, 5, 6];

console.log(a);
console.log(Array.isArray(b));
console.log(b);

//Es6 Ignorning value while using rest operator
let [a,,, ...b] = [1, 2, 3, 4, 5, 6];

console.log(a);
console.log(b);

//Es6 Default Values
let [a, b, c = 3] = [1, 2];
console.log(c); //Output "3"

//Es6 Nested ARRAY
let [a, b, [c, d]] = [1, 2, [3, 4]];
console.log(c);
console.log(a);

//Es6 in function parameter
function functionName([a, b, c=3]) {
    console.log(a, b, c);
}

functionName([1,2]);

//Es6 in function parameter with default values
function functionName2([a, b, c = 3] = [1, 2, 4]) {
    console.log(a,b,c);
}

functionName2(undefined);

//Es6 Variable Swap
let a =1 , b =2;
[a, b] = [b, a];
// a = 2, b = 1

//[b,c,d,e,a]=[a,b,c,d,e]
