//Problem: given two strings, return true if the test string is an anagram of the original string, otherwise return false

//My solution
var isAnagram = function(test, original) {
  return ([...test.toLowerCase()].sort().join('') == [...original.toLowerCase()].sort().join(''));
};

//Test cases
console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("taco", "cats"));
