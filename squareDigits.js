function squareDigits(num){
  num = num.toString().split('');
  const ints = num.map( x => { return parseInt(x) });
  const sqrd = ints.map( x => { return Math.pow(x,2) });
  return parseInt(sqrd.join(''))
}


// - Test Cases -
squareDigits(9119)//, 811181);
