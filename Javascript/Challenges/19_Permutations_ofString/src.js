function permuteString(str) {
  var results = [];

    if (str.length === 1) {
      results.push(str);
      return results;
    }

    for (var i = 0; i < str.length; i++) {
      var firstChar = str[i];
      var charsLeft = str.substring(0, i) + str.substring(i + 1);
      var innerPermutations = permuteString(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
}
