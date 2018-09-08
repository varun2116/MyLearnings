function letterChanges(str) {

  var convertedStr = str.replace(/[a-z]/g, function(char) {
    return (char == 'z' || char == 'Z') ? a : String.fromCharCode(char.charCodeAt() + 1);
  });

  var convertedStr = convertedStr.replace(/a|e|i|o|u/g, function(vowel) {
    return vowel.toUpperCase();
  });

  return convertedStr;

}
