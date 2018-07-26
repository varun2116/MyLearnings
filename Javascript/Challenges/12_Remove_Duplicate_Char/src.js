function removeDupChar(str){
    var charMap = {}, res = '';

    for (var i = 0; i < str.length; i++) {
      var c = str.charAt(i);

      // if(!charMap[c]){
      //     charMap[c] = true;
      //     res += c;
      // }

      if(str.indexOf(c) == i && str.indexOf(c, i + 1) == -1){
        res += c;
      }
    }

    return res;
}
