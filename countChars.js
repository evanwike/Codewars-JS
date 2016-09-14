function count (str) {
  str = str.split('')
  let obj = {}
  const alpha = 'abcdefghijklmnopqrstuvwxy';
  const arr = Array.from(alpha).map( x => str.filter( y => y == x )).filter( x => x.length > 0 )
  arr.map( x => obj[x[0]] = x.length )
  return obj
}




/* -- Best Practices -- 
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}
*/
