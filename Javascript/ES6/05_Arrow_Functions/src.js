//ES6
let circleArea = (pi, r) => {
    let area = pi * r * r;
    return area;
}

let result = circleArea(3.14, 3);

console.log(result);

//ES5
var circleArea = function(pi, r) {
  var area = pi * r * r;
  return area;
};

var result = circleArea(3.14, 3);

console.log(result);

//ES6 one statement
let circleArea = (pi, r) => pi * r * r;
let result = circleArea(3.14, 3);

console.log(result);

//ES5 this
var obj = {
    f1: function() {
        console.log(this);
        var f2 = function(){
            console.log(this);
        }
        f2();
        setTimeout(f2, 1000);
    }
}

obj.f1();

//Es6 this
let obj = {
    f1: () => {
        console.log(this);
        var f2 = () => {
            console.log(this);
        }
        f2();
        setTimeout(f2, 1000);
    }
}

obj.f1();
