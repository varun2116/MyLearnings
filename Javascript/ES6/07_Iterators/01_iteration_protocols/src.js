//iterator protocol
let iterable = {
    arr: [1, 2, 3, 4, 5],
    nextIndex: 0,
    next(){
        return this.nextIndex < this.arr.length ? {value: this.arr[this.nextIndex++], done: false} : {done: true};
    }
}

console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().value);
console.log(obj.next().done);

//iterable protocol
let obj = {
    arr: [1, 2, 3, 4, 5],
    nextIndex: 0,
    [Symbol.iterator](){
        return {
            arr: this.arr,
            nextIndex: this.nextIndex,
            next(){
                return this.nextIndex < this.arr.length ? {value: this.arr[this.nextIndex++], done: false} : {done: true};
            }
        }
    }
}

let iterable = obj[Symbol.iterator]();

console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().value);
console.log(iterable.next().done);
