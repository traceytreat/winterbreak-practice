//Problem: given string of words, return the word with the shortest length

//My solution
function findShort(s){
  return Math.min(...s.split(" ").map(word => word.length));
}

//Test cases
console.log(findShort("this is the test sentence"));
console.log(findShort("happy holidays and happy new year");
