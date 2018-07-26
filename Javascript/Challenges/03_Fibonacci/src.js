//try1 non recursive
function fibonacci(n){
  var arr = [0,1];
  if(n < 2) return arr[n];

  for(var i=2; i<=n; i++){
    arr[i] = arr[i-1] + arr[i-2];
  }

  return arr[n];

}


//try 2 recursive
function fibonacci(n){
  if(n <= 1) return n;
  else return fibonacci(n-1) + fibonacci(n-2);
}
