//PROBLEM: given two strings, return true if the first string ends with the second string

//My solution
function solution(str, ending){
  //Another solution:
  //return str.endsWith(ending);
  return str.length >= ending.length && (str.slice(str.length - ending.length) == ending) 
}

//Test cases
console.log(solution('hey', 'ey')); //true
console.log(solution('hello', 'hey')); //false
