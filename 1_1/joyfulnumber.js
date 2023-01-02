//Problem: https://www.codewars.com/kata/570523c146edc287a50014b1

//My solution
function numberJoy(n) {
    let s = [...String(n)].reduce((acc, curr) => acc + Number(curr), 0);
    return s * [...String(s)].reverse().join('') == n;
}
