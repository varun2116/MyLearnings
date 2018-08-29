//Species
class MyArray extends Array {
    //overwrite species to the parent Array Constructor
    static get [Symbol.species]() {
        return Array;
    }
}

let a = new Array(1, 2, 3);
let mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); //false
console.log(mapped instanceof Array); //true

//another example
class myCustomArray1 extends Array
{
   static get [Symbol.species]()
   {
     return Array;
   }
}

class myCustomArray2 extends Array{}

var arr1 = new myCustomArray1(0, 1, 2, 3, 4);
var arr2 = new myCustomArray2(0, 1, 2, 3, 4);

console.log(arr1 instanceof myCustomArray1);
console.log(arr2 instanceof myCustomArray2);

arr1 = arr1.map(function(value){ return value + 1; })
arr2 = arr2.map(function(value){ return value + 1; })

console.log(arr1 instanceof myCustomArray1);
console.log(arr2 instanceof myCustomArray2);

console.log(arr1 instanceof Array);
console.log(arr2 instanceof Array);
