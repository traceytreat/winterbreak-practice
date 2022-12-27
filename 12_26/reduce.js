//Problem: given array of integerss, return the result of multiplying each value in the array in order

//My solution
function grow(x){
  return x.reduce((acc,curr) => acc * curr, 1);
}

//Test cases

console.log(grow([1,3,4,6,7]));
console.log(grow([2,1,7,22,10]));
