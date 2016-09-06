function countBy(x, n) {
  var z = [];
  for(let i = x; i < (x * n) + 1; i += x){
    z.push(i)    
  }
  return z;
}


// - Test Cases -
countBy(1,5)//, [1,2,3,4,5], "Array does not match")
countBy(2,5)//, [2,4,6,8,10], "Array does not match")
