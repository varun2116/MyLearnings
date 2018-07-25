//try1
function stringReverse(str){
  if(!str || str.length < 2) return str;

  return str.split('').reverse().join('');
}

//try2
String.prototype.reverse = function(){
  if(!this || this.length < 2) return this;

  return this.split('').reverse().join('');
}
function stringReverse(str){
  return str.reverse();
  //'abc'.reverse();
}
