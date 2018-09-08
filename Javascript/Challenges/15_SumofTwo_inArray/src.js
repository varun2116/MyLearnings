//try1 time complexity of this function O(n2) (read as o 0f n square)
function sumFindInArr(arr, sum) {
  var len = arr.length;

  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if(parseInt(arr[i]) + parseInt(arr[j]) == sum)
        return true;
    }
  }
}

//try2
function sumFindInArr(arr, sum) {
  var len = arr.length,
      differ = {},
      subtract;

  for (var i = 0; i < len; i++) {
    subtract = sum - parseInt(arr[i]);

    if(differ[subtract]){
      return true;
    }
    else{
      differ[arr[i]] = true;
    }
  }

  return false;
}
