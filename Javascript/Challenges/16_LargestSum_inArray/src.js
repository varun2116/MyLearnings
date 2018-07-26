function largestSum(arr) {
  var max1 = Math.max.apply(null,arr);
  //var max1 = Math.max(...arr); //ES6
  arr.splice(arr.indexOf(max1), 1);
  var max2 = Math.max.apply(null,arr);
  //var max2 = Math.max(...arr); //ES6

  return max1 + max2;
}
