//try1
function letterCamelCase(str) {
  var arr = str.split(" ");

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1);
  }

  return arr.join(" ");
}

//try2
function letterCamelCase(str) {
  // our regex [a-z] matches every alphabetic character in the string
  // but the \b before it specifies a word boundary, in other words, nothing can
  // come before those letters therefore selecting every word in the string
  return str.replace(/\b[a-z]/gi, function(char) {
    return char.toUpperCase();
  });
}
