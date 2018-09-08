function countZeroes(num) {
  var count = 0;

  while(num >= 1){
    num = num/10;
    count += Math.floor(num);    
  }

  return count;
}
