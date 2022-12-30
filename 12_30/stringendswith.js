//PROBLEM: given two strings, return true if the first string ends with the second string

//My solution
function solution(str, ending){
  return str.length >= ending.length && (str.slice(str.length - ending.length) == ending) 
}

//Test cases
console.log(solution('hey', 'ey')); //true
console.log(solution('hello', 'hey')); //false
