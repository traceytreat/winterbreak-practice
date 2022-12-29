//Problem: return true if a given number is a narcissistic number 
//(equals the sum of each of its digits each raised to the power of the number of digits

//My solution
function narcissistic(value) {
  return Number([...value.toString()].reduce((acc, curr) => Number(acc) + curr**[...value.toString()].length, 0)) === value;
}

//Test cases

console.log(narcissistic(153));
console.log(narcissistic(371));
