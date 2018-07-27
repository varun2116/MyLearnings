function MaximalSquare(str) {
  var arr = str.split(",");
  var temp = [];
  var area = 0;

  for (var i = 0; i < arr.length; i++) {
    temp.push(Array(arr[i].length).fill(0));
  }

  for (var row = 0; row < arr.length; row++) {
    for (var column = 0; column < arr[row].length; column++) {
      temp[row][column] = parseInt(arr[row][column]);
      if(row && column && temp[row][column]){
        temp[row][column] = Math.min(temp[row - 1][column - 1], temp[row - 1][column], temp[row][column - 1]) + 1;
      }
      area = Math.max(area, temp[row][column]);
      //console.log(area);
    }
  }
  //console.log(temp);
  return Math.pow(area, 2);
}
