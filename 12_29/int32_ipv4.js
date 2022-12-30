//Problem: given an unsigned 32 bit number, return a string representation of its ipv4 address

//My solution
function int32ToIp(int32){
  let ip = int32.toString(2);
  while (ip.length < 32){
    ip = '0' + ip;
  }
  return [ip.slice(0,8),ip.slice(8,16),ip.slice(16,24),ip.slice(24)].map(num => parseInt(num,2)).join('.')
}

//Test cases
console.log(int32ToIp(0));
console.log(int32ToIp(2149583361));
