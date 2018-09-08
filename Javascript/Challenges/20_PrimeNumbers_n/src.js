function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if(num % i == 0)
      return false;
  }
  return true;
}

function primeNumbers(n) {
  var results = [];

  for (var i = 2; i < n; i++) {
    if(isPrime(i))
      results.push(i);
  }
  return results;
}
