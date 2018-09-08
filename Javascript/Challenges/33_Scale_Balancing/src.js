function ScaleBalancing(str1, str2) {
  var arr1 = str1.split(",").map(Number).sort(function(a,b){
        return a - b;
      }),
      arr2 = str2.split(",").map(Number).sort(function(a,b){
        return a - b;
      }),
      min = [],
      sub = arr1[1] - arr1[0];

  if(arr2.indexOf(sub) > -1){
    return sub;
  }
  else {
    for (var i = 0; i < arr2.length; i++) {
      for (var j = i+1; j < arr2.length; j++) {
        if(arr1[1] - arr1[0] == arr2[j] - arr2[i] || arr1[1] - arr1[0] == arr2[j] + arr2[i]){
          min.push(arr2[i],arr2[j]);
          return min;
        }
      }
    }
  }

  return "not possible";

}
