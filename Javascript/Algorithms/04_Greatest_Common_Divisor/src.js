//try1 non recursive
function greatestCommonDivisor(a, b){
  var divisor = 2, greatdivisor = 1;
  if(a == 0 || b == 0)
    return 0;
  if(a<2 || b<2){
    return 1;
  }

  while(a >= divisor && b >= divisor){
    if(a % divisor == 0 && b % divisor == 0)
      greatdivisor = divisor;
    divisor ++;
  }

  return greatdivisor;
}

//try2 recursive
function gcd(a, b){
   if(b == 0)
     return a;
   else
     return gcd(b, a%b);
}
