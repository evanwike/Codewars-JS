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


// - Test Cases -
splitOddAndEven(123)  //  [1,2,3])
splitOddAndEven(223)  //  [22,3])
splitOddAndEven(111)  //  [111])
splitOddAndEven(13579)  //  [13579])
splitOddAndEven(135246)  //  [135,246])
splitOddAndEven(123456)  //  [1,2,3,4,5,6])
