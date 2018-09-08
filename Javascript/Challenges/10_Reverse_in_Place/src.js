function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
}
