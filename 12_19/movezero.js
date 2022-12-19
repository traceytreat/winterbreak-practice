//Problem: given an array, move all zeroes to the end while preserving the order of every other element.

//my solution:
function moveZeros(arr) {
  return [...arr.filter(item => item !== 0), ...arr.filter(item => item === 0)];
}

//some test cases:
console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([0,3,4,2,7,0,4,3,2]));

