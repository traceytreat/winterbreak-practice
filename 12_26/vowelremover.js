//Problem: given a string, return the string with all lowercase vowels removed

//My solution
function shortcut (string) {
  return string.match(/[^aeiou]/g) ? string.match(/[^aeiou]/g).join('') : '';
}

//Test cases
console.log(shortcut('testing'));
console.log(shortcut('christmas'));
console.log(shortcut('winterbreak'));
