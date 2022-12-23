//Problem: given a string, convert each word to pig latin (move first letter to the end and add "ay")
// Do not convert punctuation marks

//My solution
//I'm sorry about the nested ternary :(
function pigIt(str){
  return str.split(" ").map(word => (word !== "!" && word !== "?" && word !== ".") ? ((word.length !== 1) ? word.slice(1) + word[0] + "ay" : word + "ay") : word).join(' ');
}

//Some test cases
console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello there friends !'));
