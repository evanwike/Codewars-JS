function splitOddAndEven(n){
  n = n.toString().split('');
  const arr = [];
  let prev = Boolean, counter = -1;
  n.map(function(x){
    let curr = x % 2 == 0;
    if(curr != prev){
      arr.push(x);
      counter++
    }
    if(curr == prev)
      arr[counter] += x
      
      prev = curr
  })
  return arr.map( x => { return parseInt(x) });
}
