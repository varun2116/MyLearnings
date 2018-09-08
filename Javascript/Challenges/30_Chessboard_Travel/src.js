function factorial(num) {
    return num === 0 ? 1 : num * factorial(num - 1);
}

function ChessboardTraveling(str) {
  var regex = /^\(\d\s\d\)\(\d\s\d\)$/;
  var formatString = regex.test(str);
  if(formatString){
      var horShift = parseInt(str.charAt(8), 10) - parseInt(str.charAt(3), 10);
      var vertShift = parseInt(str.charAt(6), 10) - parseInt(str.charAt(1), 10);
      return factorial(horShift + vertShift) / (factorial(vertShift) * factorial(horShift));
  }
  else {
    return "input format error";
  }
}
