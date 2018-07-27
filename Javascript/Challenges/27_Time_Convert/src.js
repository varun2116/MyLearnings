function TimeConvert(num) {
  var hrs = Math.floor(num/60);

  var mins = num % 60;

  return hrs + ":" + mins;
}
