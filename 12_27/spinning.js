//Problem: Given a phrase (string), reverse the order of any words >= length 5, then return the phrase.

//My solution
function spinWords(string){
  return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
}

//Test cases

console.log(spinWords('this is a test'));
console.log(spinWords('i enjoy eating cake'));
