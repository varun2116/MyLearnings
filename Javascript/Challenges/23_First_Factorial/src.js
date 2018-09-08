function firstFactorial(num) {

  function factorial(n){
    if(n===0) return 1;
    else return factorial(n-1) * n;
  }

  return factorial(num);

}
