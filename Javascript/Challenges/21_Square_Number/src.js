//try1
function squareNumber(num) {
  var sum = 0,
      squaredNum;

  for (var i = 1; i <= num; i++) {
    sum += i;
  }

  squaredNum = sum + sum - num;

  return squaredNum;
}

//try2 recursive
function recSquareNumber(num, counter = 0) {
  var sum = 0;
  if (counter != 0) {
    return counter;
  }
  for (var counter = 1; counter <= num; counter++) {
    sum += recSquareNumber(num, counter);
  }
  return sum + sum - num;
}
