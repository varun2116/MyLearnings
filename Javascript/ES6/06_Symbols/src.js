//create a symbol
let s = Symbol();

//compare two symbols with same description
let s1 = Symbol("My Symbol");
let s2 = Symbol("My Symbol");

console.log(s1 === s2);

//typeof
let s = Symbol();
console.log(typeof s);

//Using symbols as property keys
let obj = null, s1 =null;
{
    let s2 = Symbol();
    s1 = s2;
    obj = {
        [s2]: "mySymbol"
    };

    console.log(obj[s2]);
    console.log(obj[s2] == obj[s1]);
}

console.log(obj[s1]);

// Object.getOwnPropertySymbols()
let obj = {a: 12};
let s1 = Symbol("mySymbol1");
let s2 = Symbol("mySymbol2");

Object.defineProperty(obj, s1, {enumerable: false});

obj[s2] = "";

console.log(Object.getOwnPropertySymbols(obj));

//Symbol.for(string)
let obj = {};

{
    let s1 = Symbol("name");
    obj[s1] = "Eden";
}
// obj[s1] cannot be accessed Here
{
    let s2 = Symbol.for("age");
    obj[s2] = 27;
}

console.log(obj[Symbol.for("age")]);

//new operator
try{
    let s = new Symbol();
}catch(e){
    console.error(e.message); //output Symbol is not a constructor
}
