function persistence(num) {
  let counter = 0;
  if(num <= 9)
    return 0
  
  function recur(num){
    counter += 1;
    num = num.toString().split('').map( x => { return parseInt(x) });
    const prod = num.reduce( (a,b) => { return a * b });
    if(prod <= 9)
      return counter
    else
      return recur(prod)
  }
  return recur(num)
}



// - Test Cases -
persistence(39)//,3);
persistence(4)//,0);
persistence(25)//,2);
persistence(999)//,4);
