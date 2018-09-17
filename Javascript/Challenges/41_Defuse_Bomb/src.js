function RotateArray(arr, times) {
    while(times--){
        var temp = arr.shift();
        arr.push(temp);
    }
}

function SumArray(arr, index, n) {
    var total = 0;
    if(index > n){
        while(n >= 0){
            total += parseInt(arr[n--]);
        }
        while (index < arr.length) {
            total += parseInt(arr[index++]);
        }
    }
      while (index <= n && n >= 0) {
          total += parseInt(arr[index++]);
      }
    return total;
}

function AmcatDefuse(array, key) {
    var size = array.length;
    var output = [];
    for (var i = 0; i < size; i++) {
        if (i+key < size && key > 0) {
            output.push(SumArray(array, i+1, i+key));
        }
        else {
            //RotateArray(array, i+key-(size-1)); // this will shift first element to the last
            output.push(SumArray(array, i+1, i+key-size));
        }
    }
    return output;
}
