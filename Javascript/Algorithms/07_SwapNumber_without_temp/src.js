//try1
function swapNum(a,b){
  b = b - a;
  a = a + b;
  b = a - b;

  return [a,b];
}
//try2
function swapNum (a,b){
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return [a,b];
}
