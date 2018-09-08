function* generator_function() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let generator = generator_function();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);

generator = generator_function();
let iterable = generator[Symbol.iterator]();

console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().done);

//optional argument
function* generator_function() {
    let a = yield 12;
    let b = yield a + 1;
    let c = yield b + 2;
    yield c + 3;
}

let generator = generator_function();
console.log(generator.next().value);
console.log(generator.next(5).value);
console.log(generator.next(11).value);
console.log(generator.next(78).value);
console.log(generator.next().done);

//return() method
function* generator_function() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generator_function();
console.log(generator.next().value);
console.log(generator.return(22).value);
console.log(generator.next().done);

//throw() exception
function* generator_function() {
    try {
        yield 1;
    } catch (e) {
        console.log("1st Exception");
    }
    try {
        yield 2;
    } catch (e) {
        console.log("2nd Exception");
    }
}

var generator = generator_function();

console.log(generator.next().value);
console.log(generator.throw("exception string").value);
console.log(generator.throw("exception string").done);

//yield*
function* generator_function1() {
    yield 2;
    yield 3;
}

function* generator_function2() {
    yield 1;
    yield* generator_function1();
    yield* [4,5];
}

var generator = generator_function2();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().done);

//for...of
function* generator_function() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

for (let val of generator_function()) {
    console.log(val);
}
