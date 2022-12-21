//Problem: given an integer, return the number of 1s in the integer's binary representation.

//my solution:
var countBits = function(n) {
  return [...n.toString(2)].filter(num => num == 1).length;
};

//some test cases
countBits(0);
countBits(4);
