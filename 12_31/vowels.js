//Problem: given a string, return the number of vowels (a, e, i, o, u)

//My solution:
function getCount(str) {
  return (str.match(/a|e|i|o|u/g) || []).length;
}

//Test cases
console.log(getCount('happy new year'));
console.log(getCount('hello world'));
