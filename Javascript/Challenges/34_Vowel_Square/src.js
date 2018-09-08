function VowelSquare(str) {
  var arr = str.replace(/\s/g,"").split(","),
      vowels = "aeiou",
      temp = [], max =0;

  for (var row = 0; row < arr.length; row++) {
    for (var column = 0; column < arr[row].length; column++) {
      if(row && column){
        var cond = vowels.indexOf(arr[row - 1][column - 1]) > -1 &&
                    vowels.indexOf(arr[row - 1][column]) > -1 &&
                    vowels.indexOf(arr[row][column - 1]) > -1;
        if(cond){
          return (row-1) +" - "+ (column-1);
        }
      }
    }
  }

  return "not found";

}
