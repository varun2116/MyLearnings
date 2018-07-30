function ClosestEnemyII(str) {
    if(str.indexOf("2") == -1){
        return 0;
    }
    var arr = str.split(","),
        row1, column1, pos = [], closest = [], colMax = arr[1].length-1;

    for (var i = 0; i < arr.length; i++) {
      if(arr[i].indexOf("1") > -1){
          row1 = i;
          column1 = arr[i].indexOf("1");
      }
      if(arr[i].indexOf("2") > -1){
          pos.push([i,arr[i].indexOf("2")]);
      }
    }
    //console.log(pos);

    for (var i = 0; i < pos.length; i++) {
        var row = pos[i][0],
            column = pos[i][1],
            horShift = row > row1 ? row - row1 : row1 - row,
            verShift = column > column1 ? column - column1 : column1 - column;
        if(colMax - column < verShift){
            verShift = column1 + 1;
        }
        closest.push(horShift + verShift);
    }
    //console.log(closest);
    return Math.min.apply(null, closest);
}
