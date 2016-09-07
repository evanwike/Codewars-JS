function findNextSquare(sq) {
  const isP = Number.isInteger(Math.pow(sq,1/2))
  const num = Math.pow(sq,1/2)
  if(isP == false)
    return -1
  
  function find(n){
    if(Math.pow(n,2) > sq)
      return Math.pow(n,2)
    else
      return find(n+1)
  }
  return find(num)
}



// - Test Cases -
findNextSquare(121)//  144  "Wrong output for 121");
findNextSquare(625)//  676  "Wrong output for 625");
findNextSquare(319225)//  320356  "Wrong output for 319225");
findNextSquare(15241383936)//  15241630849
