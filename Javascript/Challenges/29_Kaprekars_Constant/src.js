function KaprekarsConstant(num) {
  var i = 0;
  while(num != 6174){
    num += num.length == 4 ? "" : "0";
    var desc = num.split("").sort(function(a,b){
      return b - a;
    }).join("");

    var asc = num.split("").sort(function(a,b){
      return a - b;
    }).join("");

    num = (asc > desc ? (asc - desc) : (desc - asc)).toString();
    i++;
  }
  return i;
}
