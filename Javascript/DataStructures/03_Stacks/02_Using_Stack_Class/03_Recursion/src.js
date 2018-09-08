function factorial(n) {
    if(n === 0){
        return 1;
    }

    return n * factorial(n-1);
}

function stackFactorial(n) {
    var s = new Stack();

    while(n > 1){
        s.push(n--);
    }

    var product = 1;

    while(s.length() > 0){
        product *= s.pop();
    }
    return product;
}

print(factorial(5)); // displays 120
print(stackFactorial(5)); // displays 120
