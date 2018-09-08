function missingNumber(arr){
  var len = arr.length,
    n = len + 1,
    expectedSum = n * (n+1)/2,
    sum = 0;

    for (var i = 0; i < len; i++) {
      sum += parseInt(arr[i]);
    }

    return expectedSum - sum;

}
