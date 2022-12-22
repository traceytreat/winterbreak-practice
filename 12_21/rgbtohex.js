//Problem: given a r, g, and b value, convert from RGB to hex code
//Values less than 0 or more than 255 should be rounded to fit within the 0-255 range

//My solution
function rgb(r, g, b){
  r = Math.min(Math.max(r, 0), 255);
  g = Math.min(Math.max(g, 0), 255);
  b = Math.min(Math.max(b, 0), 255);
  return (r.toString(16).length == 1 ? '0' + r.toString(16) : r.toString(16)).toUpperCase()  + (g.toString(16).length == 1 ? '0' + g.toString(16) : g.toString(16)).toUpperCase()  + (b.toString(16).length == 1 ? '0' + b.toString(16) : b.toString(16)).toUpperCase() ;
}

//some test cases
console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300,255,255));
