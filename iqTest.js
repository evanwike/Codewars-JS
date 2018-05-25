// IQ Test? God I hope not

const iqTest = numbers => {
  const even = [], odd = []
  
  numbers
    .split(' ')
    .forEach(x => {
      x = Math.trunc(x)
    
      if(x % 2 == 0)
        even.push(numbers.indexOf(x) + 1)
      else
        odd.push(numbers.indexOf(x) + 1)
    })
  
  return even.length > odd.length ? odd[0] : even[0]
}



// - Test Cases -
iqTest("2 4 7 8 10")//,3);
iqTest("1 2 2")//, 1);
