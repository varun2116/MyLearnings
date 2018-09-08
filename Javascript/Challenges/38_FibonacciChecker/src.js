function isPerfectSquare(num) {
    var s = Math.floor(Math.sqrt(num));
    return s * s == num;
}

function FibonacciChecker(n) {
    return isPerfectSquare(5*n*n - 4) || isPerfectSquare(5*n*n + 4);
}
