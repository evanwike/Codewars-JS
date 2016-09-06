function isIsogram(str){
  const split = str.split(''), occ = [];
  const arr = split.map( x => { return x.toLowerCase() })
  arr.map(function(x){
    const curr = arr.filter( y => { return y == x })
    occ.push(curr.length)
  })
  return occ.every( x => { return x == 1}) == true ? true : false
}


// - Test Cases -
isIsogram("Dermatoglyphics")// true );
isIsogram("isogram")// true );
isIsogram("aba")// false, "same chars may not be adjacent" );
isIsogram("moOse")// false, "same chars may not be same case" );
isIsogram("isIsogram")// false );
isIsogram("")// true, "an empty string is a valid isogram" );
