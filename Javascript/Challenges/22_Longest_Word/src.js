function LongestWord(sen) {
    var arr = sen.match(/[a-z0-9]+/gi),//.split(" "),
    maxLength = 0;
    // for(var i =arr.length -1; i >= 0; i--){
    //   if(arr[i].length >= maxLength){
    //       maxLength = arr[i].length;
    //       sen = arr[i];
    //   }
    // }
    var sorted = arr.sort(function(a, b) {
      return b.length - a.length;
    });
  // code goes here
  //return sen;
  return sorted[0];

}
